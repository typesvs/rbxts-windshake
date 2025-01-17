
type WindShakeSettings = {
    WindDirection?: Vector3
    WindSpeed?: number,
    WindPower?: number
}

interface WindShake {
    RenderDistance: number

    MaxRefreshRate: number

    ObjectShakeAdded: RBXScriptSignal<(Object: BasePart) => void>
    ObjectShakeRemoved: RBXScriptSignal<(Object: BasePart) => void>
    ObjectShakeUpdated: RBXScriptSignal<(Object: BasePart) => void>
    
    Resumed: RBXScriptSignal<() => void>
    Paused: RBXScriptSignal<() => void>

    Init(config?: {
        MatchWorkspaceWind?: boolean
    }): void

    Cleanup(): void
    Pause(): void
    Resume(): void
    
    AddObjectShake(Object: BasePart, Settings: Settings): void
    RemoveObjectShake(Object: BasePart): void

    /**
     * @deprecated
     */
    UpdateObjectSettings(Object: BasePart, Settings: Settings): void
    UpdateAllObjectSettings(Settings: Settings): void
}

interface Settings {
    WindDirection: Vector3
    WindSpeed: number
    WindPower: number
}
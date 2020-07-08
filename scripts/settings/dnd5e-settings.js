export function registerSettings(app, updateSettings) {

    game.settings.register(app,'ignorePassiveFeats', {
        name: game.i18n.localize('tokenactionhud.settings.dnd5e.ignorePassiveFeats.name'),
        hint: game.i18n.localize('tokenactionhud.settings.dnd5e.ignorePassiveFeats.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'showSpellInfo', {
        name: game.i18n.localize('tokenactionhud.settings.dnd5e.showSpellInfo.name'),
        hint: game.i18n.localize('tokenactionhud.settings.dnd5e.showSpellInfo.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'showAllNonpreparableSpells', {
        name: game.i18n.localize('tokenactionhud.settings.dnd5e.showAllNonpreparableSpells.name'),
        hint: game.i18n.localize('tokenactionhud.settings.dnd5e.showAllNonpreparableSpells.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'hideLongerActions', {
        name: game.i18n.localize('tokenactionhud.settings.dnd5e.hideLongerActions.name'),
        hint: game.i18n.localize('tokenactionhud.settings.dnd5e.hideLongerActions.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'abbreviateSkills', {
        name: game.i18n.localize('tokenactionhud.settings.dnd5e.abbreviateSkills.name'),
        hint: game.i18n.localize('tokenactionhud.settings.dnd5e.abbreviateSkills.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'splitAbilities', {
        name: game.i18n.localize('tokenactionhud.settings.dnd5e.splitAbilities.name'),
        hint: game.i18n.localize('tokenactionhud.settings.dnd5e.splitAbilities.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'showAllNpcItems', {
        name: game.i18n.localize('tokenactionhud.settings.dnd5e.showAllNpcItems.name'),
        hint: game.i18n.localize('tokenactionhud.settings.dnd5e.showAllNpcItems.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateSettings(value); }
    });
}
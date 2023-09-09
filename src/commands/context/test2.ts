import { ActionRowBuilder, ApplicationCommandType, ButtonBuilder, ButtonStyle, type MessageContextMenuCommandInteraction } from 'discord.js';

import { formatMessageToEmbed } from '../../misc/util.js';

import type { Command } from '../../structures/command.js';

export default {
    data: {
        name: 'test2',
        type: ApplicationCommandType.Message,
    },
    opt: {
        userPermissions: ['SendMessages'],
        botPermissions: ['SendMessages'],
        category: 'Context',
        cooldown: 4
    },
    async execute(interaction: MessageContextMenuCommandInteraction<'cached'>) {
        const message = await interaction.targetMessage.fetch();

        await interaction.deferReply();

        await interaction.editReply({
            embeds: [formatMessageToEmbed(message)],
            components: [
                new ActionRowBuilder<ButtonBuilder>()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel('Original Message')
                            .setStyle(ButtonStyle.Link)
                            .setURL(message.url)
                    )
            ]
        });
    }
} satisfies Command;

//si no sabes de ts no usar este codigo UwU

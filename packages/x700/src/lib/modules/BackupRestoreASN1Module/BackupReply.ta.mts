/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    BackupReply_reply,
    _decode_BackupReply_reply,
    _encode_BackupReply_reply,
} from '../BackupRestoreASN1Module/BackupReply-reply.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BackupReply */
/**
 * @summary BackupReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupReply ::= SEQUENCE {
 *   reply
 *     [0]  CHOICE {success  NULL, -- for local or off-line backup --
 *                  inLine   BIT STRING},
 *   additionalInfo  [1]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BackupReply {
    constructor(
        /**
         * @summary `reply`.
         * @public
         * @readonly
         */
        readonly reply: BackupReply_reply,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a BackupReply
     * @description
     *
     * This takes an `object` and converts it to a `BackupReply`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BackupReply`.
     * @returns {BackupReply}
     */
    public static _from_object(
        _o: { [_K in keyof BackupReply]: BackupReply[_K] }
    ): BackupReply {
        return new BackupReply(_o.reply, _o.additionalInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION BackupReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BackupReply */
/**
 * @summary The Leading Root Component Types of BackupReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BackupReply: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'reply',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BackupReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BackupReply */
/**
 * @summary The Trailing Root Component Types of BackupReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BackupReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BackupReply */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BackupReply */
/**
 * @summary The Extension Addition Component Types of BackupReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BackupReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BackupReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupReply */
let _cached_decoder_for_BackupReply: $.ASN1Decoder<BackupReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupReply */

/* START_OF_SYMBOL_DEFINITION _decode_BackupReply */
/**
 * @summary Decodes an ASN.1 element into a(n) BackupReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupReply} The decoded data structure.
 */
export function _decode_BackupReply(el: _Element) {
    if (!_cached_decoder_for_BackupReply) {
        _cached_decoder_for_BackupReply = function (el: _Element): BackupReply {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let reply!: BackupReply_reply;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                reply: (_el: _Element): void => {
                    reply = $._decode_explicit<BackupReply_reply>(
                        () => _decode_BackupReply_reply
                    )(_el);
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decode_implicit<ManagementExtension[]>(
                        () =>
                            $._decodeSetOf<ManagementExtension>(
                                () => _decode_ManagementExtension
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BackupReply,
                _extension_additions_list_spec_for_BackupReply,
                _root_component_type_list_2_spec_for_BackupReply,
                undefined
            );
            return new BackupReply /* SEQUENCE_CONSTRUCTOR_CALL */(
                reply,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_BackupReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackupReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupReply */
let _cached_encoder_for_BackupReply: $.ASN1Encoder<BackupReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupReply */

/* START_OF_SYMBOL_DEFINITION _encode_BackupReply */
/**
 * @summary Encodes a(n) BackupReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupReply, encoded as an ASN.1 Element.
 */
export function _encode_BackupReply(
    value: BackupReply,
    elGetter: $.ASN1Encoder<BackupReply>
) {
    if (!_cached_encoder_for_BackupReply) {
        _cached_encoder_for_BackupReply = function (
            value: BackupReply        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_BackupReply_reply,
                            $.BER
                        )(value.reply, $.BER),
                        /* IF_ABSENT  */ value.additionalInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ManagementExtension>(
                                          () => _encode_ManagementExtension,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.additionalInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BackupReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackupReply */

/* eslint-enable */

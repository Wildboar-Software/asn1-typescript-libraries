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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    BackupReply_reply,
    _decode_BackupReply_reply,
    _encode_BackupReply_reply,
} from '../BackupRestoreASN1Module/BackupReply-reply.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module';
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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of BackupReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BackupReply: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BackupReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BackupReply: $.ComponentSpec[] = [];

let _cached_decoder_for_BackupReply: $.ASN1Decoder<BackupReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BackupReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupReply} The decoded data structure.
 */
export function _decode_BackupReply(el: _Element): BackupReply {
    if (!_cached_decoder_for_BackupReply) {
        _cached_decoder_for_BackupReply = function (el: _Element): BackupReply {
            let reply!: BackupReply_reply;
            let additionalInfo: OPTIONAL<ManagementExtension[]>;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BackupReply,
                _extension_additions_list_spec_for_BackupReply,
                _root_component_type_list_2_spec_for_BackupReply,
                undefined
            );
            return new BackupReply (
                reply,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_BackupReply(el);
}

let _cached_encoder_for_BackupReply: $.ASN1Encoder<BackupReply> | null = null;

/**
 * @summary Encodes a(n) BackupReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupReply, encoded as an ASN.1 Element.
 */
export function _encode_BackupReply(
    value: BackupReply,
    elGetter: $.ASN1Encoder<BackupReply>
): _Element {
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


/* eslint-enable */

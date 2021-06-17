/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION ProtectionMismatchStatus */
/**
 * @summary ProtectionMismatchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionMismatchStatus ::= SEQUENCE {
 *   uniBi      [0]  BOOLEAN,
 *   plusColon  [1]  BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class ProtectionMismatchStatus {
    constructor(
        /**
         * @summary `uniBi`.
         * @public
         * @readonly
         */
        readonly uniBi: BOOLEAN,
        /**
         * @summary `plusColon`.
         * @public
         * @readonly
         */
        readonly plusColon: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a ProtectionMismatchStatus
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionMismatchStatus`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionMismatchStatus`.
     * @returns {ProtectionMismatchStatus}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtectionMismatchStatus]: ProtectionMismatchStatus[_K];
        }
    ): ProtectionMismatchStatus {
        return new ProtectionMismatchStatus(_o.uniBi, _o.plusColon);
    }
}
/* END_OF_SYMBOL_DEFINITION ProtectionMismatchStatus */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionMismatchStatus */
/**
 * @summary The Leading Root Component Types of ProtectionMismatchStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionMismatchStatus: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'uniBi',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'plusColon',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionMismatchStatus */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionMismatchStatus */
/**
 * @summary The Trailing Root Component Types of ProtectionMismatchStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionMismatchStatus: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionMismatchStatus */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionMismatchStatus */
/**
 * @summary The Extension Addition Component Types of ProtectionMismatchStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionMismatchStatus: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionMismatchStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionMismatchStatus */
let _cached_decoder_for_ProtectionMismatchStatus: $.ASN1Decoder<ProtectionMismatchStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionMismatchStatus */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionMismatchStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionMismatchStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionMismatchStatus} The decoded data structure.
 */
export function _decode_ProtectionMismatchStatus(el: _Element) {
    if (!_cached_decoder_for_ProtectionMismatchStatus) {
        _cached_decoder_for_ProtectionMismatchStatus = function (
            el: _Element
        ): ProtectionMismatchStatus {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ProtectionMismatchStatus contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'uniBi';
            sequence[1].name = 'plusColon';
            let uniBi!: BOOLEAN;
            let plusColon!: BOOLEAN;
            uniBi = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(
                sequence[0]
            );
            plusColon = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(
                sequence[1]
            );
            return new ProtectionMismatchStatus(uniBi, plusColon);
        };
    }
    return _cached_decoder_for_ProtectionMismatchStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionMismatchStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionMismatchStatus */
let _cached_encoder_for_ProtectionMismatchStatus: $.ASN1Encoder<ProtectionMismatchStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionMismatchStatus */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionMismatchStatus */
/**
 * @summary Encodes a(n) ProtectionMismatchStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionMismatchStatus, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionMismatchStatus(
    value: ProtectionMismatchStatus,
    elGetter: $.ASN1Encoder<ProtectionMismatchStatus>
) {
    if (!_cached_encoder_for_ProtectionMismatchStatus) {
        _cached_encoder_for_ProtectionMismatchStatus = function (
            value: ProtectionMismatchStatus,
            elGetter: $.ASN1Encoder<ProtectionMismatchStatus>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeBoolean,
                            $.BER
                        )(value.uniBi, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeBoolean,
                            $.BER
                        )(value.plusColon, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionMismatchStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionMismatchStatus */

/* eslint-enable */

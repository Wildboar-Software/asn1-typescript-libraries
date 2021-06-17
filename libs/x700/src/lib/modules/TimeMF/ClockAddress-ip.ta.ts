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

/* START_OF_SYMBOL_DEFINITION ClockAddress_ip */
/**
 * @summary ClockAddress_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockAddress-ip ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ClockAddress_ip {
    constructor(
        /**
         * @summary `host`.
         * @public
         * @readonly
         */
        readonly host: OCTET_STRING,
        /**
         * @summary `port`.
         * @public
         * @readonly
         */
        readonly port: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a ClockAddress_ip
     * @description
     *
     * This takes an `object` and converts it to a `ClockAddress_ip`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClockAddress_ip`.
     * @returns {ClockAddress_ip}
     */
    public static _from_object(
        _o: { [_K in keyof ClockAddress_ip]: ClockAddress_ip[_K] }
    ): ClockAddress_ip {
        return new ClockAddress_ip(_o.host, _o.port);
    }
}
/* END_OF_SYMBOL_DEFINITION ClockAddress_ip */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ClockAddress_ip */
/**
 * @summary The Leading Root Component Types of ClockAddress_ip
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ClockAddress_ip: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'host',
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'port',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ClockAddress_ip */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ClockAddress_ip */
/**
 * @summary The Trailing Root Component Types of ClockAddress_ip
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ClockAddress_ip: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ClockAddress_ip */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ClockAddress_ip */
/**
 * @summary The Extension Addition Component Types of ClockAddress_ip
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ClockAddress_ip: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ClockAddress_ip */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockAddress_ip */
let _cached_decoder_for_ClockAddress_ip: $.ASN1Decoder<ClockAddress_ip> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockAddress_ip */

/* START_OF_SYMBOL_DEFINITION _decode_ClockAddress_ip */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockAddress_ip
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockAddress_ip} The decoded data structure.
 */
export function _decode_ClockAddress_ip(el: _Element) {
    if (!_cached_decoder_for_ClockAddress_ip) {
        _cached_decoder_for_ClockAddress_ip = function (
            el: _Element
        ): ClockAddress_ip {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ClockAddress-ip contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'host';
            sequence[1].name = 'port';
            let host!: OCTET_STRING;
            let port!: INTEGER;
            host = $._decodeOctetString(sequence[0]);
            port = $._decodeInteger(sequence[1]);
            return new ClockAddress_ip(host, port);
        };
    }
    return _cached_decoder_for_ClockAddress_ip(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockAddress_ip */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockAddress_ip */
let _cached_encoder_for_ClockAddress_ip: $.ASN1Encoder<ClockAddress_ip> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockAddress_ip */

/* START_OF_SYMBOL_DEFINITION _encode_ClockAddress_ip */
/**
 * @summary Encodes a(n) ClockAddress_ip into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockAddress_ip, encoded as an ASN.1 Element.
 */
export function _encode_ClockAddress_ip(
    value: ClockAddress_ip,
    elGetter: $.ASN1Encoder<ClockAddress_ip>
) {
    if (!_cached_encoder_for_ClockAddress_ip) {
        _cached_encoder_for_ClockAddress_ip = function (
            value: ClockAddress_ip,
            elGetter: $.ASN1Encoder<ClockAddress_ip>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeOctetString(
                            value.host,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(value.port, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ClockAddress_ip(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockAddress_ip */

/* eslint-enable */

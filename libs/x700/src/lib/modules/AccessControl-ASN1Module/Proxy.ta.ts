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
import { AC_PROXY } from '../AccessControl-ASN1Module/AC-PROXY.oca';
export { AC_PROXY } from '../AccessControl-ASN1Module/AC-PROXY.oca';
import { ProxySet } from '../AccessControl-ASN1Module/ProxySet.osa';
export { ProxySet } from '../AccessControl-ASN1Module/ProxySet.osa';

/* START_OF_SYMBOL_DEFINITION Proxy */
/**
 * @summary Proxy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Proxy ::= SEQUENCE {
 *   proxyId     [0] IMPLICIT AC-PROXY.&id({ProxySet}),
 *   proxyValue  [1]  AC-PROXY.&Value({ProxySet}{@.proxyId})
 * }
 * ```
 *
 * @class
 */
export class Proxy {
    constructor(
        /**
         * @summary `proxyId`.
         * @public
         * @readonly
         */
        readonly proxyId: OBJECT_IDENTIFIER,
        /**
         * @summary `proxyValue`.
         * @public
         * @readonly
         */
        readonly proxyValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a Proxy
     * @description
     *
     * This takes an `object` and converts it to a `Proxy`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Proxy`.
     * @returns {Proxy}
     */
    public static _from_object(_o: { [_K in keyof Proxy]: Proxy[_K] }): Proxy {
        return new Proxy(_o.proxyId, _o.proxyValue);
    }
}
/* END_OF_SYMBOL_DEFINITION Proxy */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Proxy */
/**
 * @summary The Leading Root Component Types of Proxy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Proxy: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'proxyId',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'proxyValue',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Proxy */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Proxy */
/**
 * @summary The Trailing Root Component Types of Proxy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Proxy: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Proxy */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Proxy */
/**
 * @summary The Extension Addition Component Types of Proxy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Proxy: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Proxy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Proxy */
let _cached_decoder_for_Proxy: $.ASN1Decoder<Proxy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Proxy */

/* START_OF_SYMBOL_DEFINITION _decode_Proxy */
/**
 * @summary Decodes an ASN.1 element into a(n) Proxy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Proxy} The decoded data structure.
 */
export function _decode_Proxy(el: _Element) {
    if (!_cached_decoder_for_Proxy) {
        _cached_decoder_for_Proxy = function (el: _Element): Proxy {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Proxy contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'proxyId';
            sequence[1].name = 'proxyValue';
            let proxyId!: OBJECT_IDENTIFIER;
            let proxyValue!: _Element;
            proxyId = $._decode_implicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            proxyValue = $._decode_implicit<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new Proxy(proxyId, proxyValue);
        };
    }
    return _cached_decoder_for_Proxy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Proxy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Proxy */
let _cached_encoder_for_Proxy: $.ASN1Encoder<Proxy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Proxy */

/* START_OF_SYMBOL_DEFINITION _encode_Proxy */
/**
 * @summary Encodes a(n) Proxy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Proxy, encoded as an ASN.1 Element.
 */
export function _encode_Proxy(value: Proxy, elGetter: $.ASN1Encoder<Proxy>) {
    if (!_cached_encoder_for_Proxy) {
        _cached_encoder_for_Proxy = function (
            value: Proxy,
            elGetter: $.ASN1Encoder<Proxy>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.proxyId, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeAny,
                            $.BER
                        )(value.proxyValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Proxy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Proxy */

/* eslint-enable */

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
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta';
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION Hash */
/**
 * @summary Hash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Hash ::= SEQUENCE {
 *     algorithmIdentifier         AlgorithmIdentifier,
 *     hashValue                   OCTET STRING }
 * ```
 *
 * @class
 */
export class Hash {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `hashValue`.
         * @public
         * @readonly
         */
        readonly hashValue: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a Hash
     * @description
     *
     * This takes an `object` and converts it to a `Hash`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Hash`.
     * @returns {Hash}
     */
    public static _from_object(_o: { [_K in keyof Hash]: Hash[_K] }): Hash {
        return new Hash(_o.algorithmIdentifier, _o.hashValue);
    }
}
/* END_OF_SYMBOL_DEFINITION Hash */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Hash */
/**
 * @summary The Leading Root Component Types of Hash
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Hash: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'algorithmIdentifier',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'hashValue',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Hash */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Hash */
/**
 * @summary The Trailing Root Component Types of Hash
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Hash: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Hash */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Hash */
/**
 * @summary The Extension Addition Component Types of Hash
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Hash: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Hash */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Hash */
let _cached_decoder_for_Hash: $.ASN1Decoder<Hash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Hash */

/* START_OF_SYMBOL_DEFINITION _decode_Hash */
/**
 * @summary Decodes an ASN.1 element into a(n) Hash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Hash} The decoded data structure.
 */
export function _decode_Hash(el: _Element) {
    if (!_cached_decoder_for_Hash) {
        _cached_decoder_for_Hash = function (el: _Element): Hash {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Hash contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'algorithmIdentifier';
            sequence[1].name = 'hashValue';
            let algorithmIdentifier!: AlgorithmIdentifier;
            let hashValue!: OCTET_STRING;
            algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
            hashValue = $._decodeOctetString(sequence[1]);
            return new Hash(algorithmIdentifier, hashValue);
        };
    }
    return _cached_decoder_for_Hash(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Hash */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Hash */
let _cached_encoder_for_Hash: $.ASN1Encoder<Hash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Hash */

/* START_OF_SYMBOL_DEFINITION _encode_Hash */
/**
 * @summary Encodes a(n) Hash into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Hash, encoded as an ASN.1 Element.
 */
export function _encode_Hash(value: Hash, elGetter: $.ASN1Encoder<Hash>) {
    if (!_cached_encoder_for_Hash) {
        _cached_encoder_for_Hash = function (
            value: Hash,
            elGetter: $.ASN1Encoder<Hash>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithmIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.hashValue,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Hash(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Hash */

/* eslint-enable */

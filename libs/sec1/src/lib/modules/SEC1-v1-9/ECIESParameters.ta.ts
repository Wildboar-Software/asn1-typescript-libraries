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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { KeyDerivationFunction, _decode_KeyDerivationFunction, _encode_KeyDerivationFunction } from "../SEC1-v1-9/KeyDerivationFunction.ta";
export { KeyDerivationFunction, _decode_KeyDerivationFunction, _encode_KeyDerivationFunction } from "../SEC1-v1-9/KeyDerivationFunction.ta";
import { SymmetricEncryption, _decode_SymmetricEncryption, _encode_SymmetricEncryption } from "../SEC1-v1-9/SymmetricEncryption.ta";
export { SymmetricEncryption, _decode_SymmetricEncryption, _encode_SymmetricEncryption } from "../SEC1-v1-9/SymmetricEncryption.ta";
import { MessageAuthenticationCode, _decode_MessageAuthenticationCode, _encode_MessageAuthenticationCode } from "../SEC1-v1-9/MessageAuthenticationCode.ta";
export { MessageAuthenticationCode, _decode_MessageAuthenticationCode, _encode_MessageAuthenticationCode } from "../SEC1-v1-9/MessageAuthenticationCode.ta";


/* START_OF_SYMBOL_DEFINITION ECIESParameters */
/**
 * @summary ECIESParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECIESParameters ::= SEQUENCE {
 *     kdf [0] KeyDerivationFunction OPTIONAL,
 *     sym [1] SymmetricEncryption OPTIONAL,
 *     mac [2] MessageAuthenticationCode OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ECIESParameters {
    constructor (
        /**
         * @summary `kdf`.
         * @public
         * @readonly
         */
        readonly kdf: OPTIONAL<KeyDerivationFunction>,
        /**
         * @summary `sym`.
         * @public
         * @readonly
         */
        readonly sym: OPTIONAL<SymmetricEncryption>,
        /**
         * @summary `mac`.
         * @public
         * @readonly
         */
        readonly mac: OPTIONAL<MessageAuthenticationCode>
    ) {}

    /**
     * @summary Restructures an object into a ECIESParameters
     * @description
     * 
     * This takes an `object` and converts it to a `ECIESParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECIESParameters`.
     * @returns {ECIESParameters}
     */
    public static _from_object (_o: { [_K in keyof (ECIESParameters)]: (ECIESParameters)[_K] }): ECIESParameters {
        return new ECIESParameters(_o.kdf, _o.sym, _o.mac);
    }


}
/* END_OF_SYMBOL_DEFINITION ECIESParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECIESParameters */
/**
 * @summary The Leading Root Component Types of ECIESParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECIESParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("kdf", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sym", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("mac", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECIESParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECIESParameters */
/**
 * @summary The Trailing Root Component Types of ECIESParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECIESParameters: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECIESParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECIESParameters */
/**
 * @summary The Extension Addition Component Types of ECIESParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECIESParameters: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECIESParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECIESParameters */
let _cached_decoder_for_ECIESParameters: $.ASN1Decoder<ECIESParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECIESParameters */

/* START_OF_SYMBOL_DEFINITION _decode_ECIESParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) ECIESParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECIESParameters} The decoded data structure.
 */
export
function _decode_ECIESParameters (el: _Element) {
    if (!_cached_decoder_for_ECIESParameters) { _cached_decoder_for_ECIESParameters = function (el: _Element): ECIESParameters {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let kdf: OPTIONAL<KeyDerivationFunction>;
    let sym: OPTIONAL<SymmetricEncryption>;
    let mac: OPTIONAL<MessageAuthenticationCode>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "kdf": (_el: _Element): void => { kdf = $._decode_explicit<KeyDerivationFunction>(() => _decode_KeyDerivationFunction)(_el); },
        "sym": (_el: _Element): void => { sym = $._decode_explicit<SymmetricEncryption>(() => _decode_SymmetricEncryption)(_el); },
        "mac": (_el: _Element): void => { mac = $._decode_explicit<MessageAuthenticationCode>(() => _decode_MessageAuthenticationCode)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ECIESParameters,
        _extension_additions_list_spec_for_ECIESParameters,
        _root_component_type_list_2_spec_for_ECIESParameters,
        undefined,
    );
    return new ECIESParameters( /* SEQUENCE_CONSTRUCTOR_CALL */
        kdf,
        sym,
        mac
    );
}; }
    return _cached_decoder_for_ECIESParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECIESParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECIESParameters */
let _cached_encoder_for_ECIESParameters: $.ASN1Encoder<ECIESParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECIESParameters */

/* START_OF_SYMBOL_DEFINITION _encode_ECIESParameters */
/**
 * @summary Encodes a(n) ECIESParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECIESParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ECIESParameters (value: ECIESParameters, elGetter: $.ASN1Encoder<ECIESParameters>) {
    if (!_cached_encoder_for_ECIESParameters) { _cached_encoder_for_ECIESParameters = function (value: ECIESParameters, elGetter: $.ASN1Encoder<ECIESParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.kdf === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_KeyDerivationFunction, $.BER)(value.kdf, $.BER)),
            /* IF_ABSENT  */ ((value.sym === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SymmetricEncryption, $.BER)(value.sym, $.BER)),
            /* IF_ABSENT  */ ((value.mac === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_MessageAuthenticationCode, $.BER)(value.mac, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ECIESParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECIESParameters */

/* eslint-enable */

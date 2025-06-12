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
import * as $ from "asn1-ts/dist/functional.mjs";
import { ECPrivateKey_version, ECPrivateKey_version_ecPrivkeyVer1 /* IMPORTED_LONG_NAMED_INTEGER */, ecPrivkeyVer1 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ECPrivateKey_version, _encode_ECPrivateKey_version } from "../SEC1-v1-9/ECPrivateKey-version.ta.mjs";
export { ECPrivateKey_version, ECPrivateKey_version_ecPrivkeyVer1 /* IMPORTED_LONG_NAMED_INTEGER */, ecPrivkeyVer1 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ECPrivateKey_version, _encode_ECPrivateKey_version } from "../SEC1-v1-9/ECPrivateKey-version.ta.mjs";
import { ECDomainParameters, _decode_ECDomainParameters, _encode_ECDomainParameters } from "../SEC1-v1-9/ECDomainParameters.ta.mjs";
export { ECDomainParameters, _decode_ECDomainParameters, _encode_ECDomainParameters } from "../SEC1-v1-9/ECDomainParameters.ta.mjs";


/* START_OF_SYMBOL_DEFINITION ECPrivateKey */
/**
 * @summary ECPrivateKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPrivateKey ::= SEQUENCE {
 *     version INTEGER { ecPrivkeyVer1(1) } (ecPrivkeyVer1),
 *     privateKey OCTET STRING,
 *     parameters [0] ECDomainParameters {{ SECGCurveNames }} OPTIONAL,
 *     publicKey [1] BIT STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ECPrivateKey {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: ECPrivateKey_version,
        /**
         * @summary `privateKey`.
         * @public
         * @readonly
         */
        readonly privateKey: OCTET_STRING,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<ECDomainParameters>,
        /**
         * @summary `publicKey`.
         * @public
         * @readonly
         */
        readonly publicKey: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ECPrivateKey
     * @description
     * 
     * This takes an `object` and converts it to a `ECPrivateKey`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECPrivateKey`.
     * @returns {ECPrivateKey}
     */
    public static _from_object (_o: { [_K in keyof (ECPrivateKey)]: (ECPrivateKey)[_K] }): ECPrivateKey {
        return new ECPrivateKey(_o.version, _o.privateKey, _o.parameters, _o.publicKey);
    }


}
/* END_OF_SYMBOL_DEFINITION ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECPrivateKey */
/**
 * @summary The Leading Root Component Types of ECPrivateKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECPrivateKey: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("privateKey", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("parameters", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("publicKey", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECPrivateKey */
/**
 * @summary The Trailing Root Component Types of ECPrivateKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECPrivateKey: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECPrivateKey */
/**
 * @summary The Extension Addition Component Types of ECPrivateKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECPrivateKey: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey */
let _cached_decoder_for_ECPrivateKey: $.ASN1Decoder<ECPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_ECPrivateKey */
/**
 * @summary Decodes an ASN.1 element into a(n) ECPrivateKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPrivateKey} The decoded data structure.
 */
export
function _decode_ECPrivateKey (el: _Element) {
    if (!_cached_decoder_for_ECPrivateKey) { _cached_decoder_for_ECPrivateKey = function (el: _Element): ECPrivateKey {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: ECPrivateKey_version;
    let privateKey!: OCTET_STRING;
    let parameters: OPTIONAL<ECDomainParameters>;
    let publicKey: OPTIONAL<BIT_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_ECPrivateKey_version(_el); },
        "privateKey": (_el: _Element): void => { privateKey = $._decodeOctetString(_el); },
        "parameters": (_el: _Element): void => { parameters = $._decode_explicit<ECDomainParameters>(() => _decode_ECDomainParameters)(_el); },
        "publicKey": (_el: _Element): void => { publicKey = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ECPrivateKey,
        _extension_additions_list_spec_for_ECPrivateKey,
        _root_component_type_list_2_spec_for_ECPrivateKey,
        undefined,
    );
    return new ECPrivateKey( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        privateKey,
        parameters,
        publicKey
    );
}; }
    return _cached_decoder_for_ECPrivateKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey */
let _cached_encoder_for_ECPrivateKey: $.ASN1Encoder<ECPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_ECPrivateKey */
/**
 * @summary Encodes a(n) ECPrivateKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPrivateKey, encoded as an ASN.1 Element.
 */
export
function _encode_ECPrivateKey (value: ECPrivateKey, elGetter: $.ASN1Encoder<ECPrivateKey>) {
    if (!_cached_encoder_for_ECPrivateKey) { _cached_encoder_for_ECPrivateKey = function (value: ECPrivateKey, elGetter: $.ASN1Encoder<ECPrivateKey>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ECPrivateKey_version(value.version, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.privateKey, $.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_ECDomainParameters, $.BER)(value.parameters, $.BER)),
            /* IF_ABSENT  */ ((value.publicKey === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeBitString, $.BER)(value.publicKey, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ECPrivateKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECPrivateKey */

/* eslint-enable */

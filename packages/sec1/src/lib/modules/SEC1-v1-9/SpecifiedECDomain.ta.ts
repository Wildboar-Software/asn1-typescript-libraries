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
import { SpecifiedECDomainVersion, SpecifiedECDomainVersion_ecdpVer1 /* IMPORTED_LONG_NAMED_INTEGER */, ecdpVer1 /* IMPORTED_SHORT_NAMED_INTEGER */, SpecifiedECDomainVersion_ecdpVer2 /* IMPORTED_LONG_NAMED_INTEGER */, ecdpVer2 /* IMPORTED_SHORT_NAMED_INTEGER */, SpecifiedECDomainVersion_ecdpVer3 /* IMPORTED_LONG_NAMED_INTEGER */, ecdpVer3 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SpecifiedECDomainVersion, _encode_SpecifiedECDomainVersion } from "../SEC1-v1-9/SpecifiedECDomainVersion.ta";
export { SpecifiedECDomainVersion, SpecifiedECDomainVersion_ecdpVer1 /* IMPORTED_LONG_NAMED_INTEGER */, ecdpVer1 /* IMPORTED_SHORT_NAMED_INTEGER */, SpecifiedECDomainVersion_ecdpVer2 /* IMPORTED_LONG_NAMED_INTEGER */, ecdpVer2 /* IMPORTED_SHORT_NAMED_INTEGER */, SpecifiedECDomainVersion_ecdpVer3 /* IMPORTED_LONG_NAMED_INTEGER */, ecdpVer3 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SpecifiedECDomainVersion, _encode_SpecifiedECDomainVersion } from "../SEC1-v1-9/SpecifiedECDomainVersion.ta";
import { FieldID, _decode_FieldID, _encode_FieldID } from "../SEC1-v1-9/FieldID.ta";
export { FieldID, _decode_FieldID, _encode_FieldID } from "../SEC1-v1-9/FieldID.ta";
import { Curve, _decode_Curve, _encode_Curve } from "../SEC1-v1-9/Curve.ta";
export { Curve, _decode_Curve, _encode_Curve } from "../SEC1-v1-9/Curve.ta";
import { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../SEC1-v1-9/ECPoint.ta";
export { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../SEC1-v1-9/ECPoint.ta";
import { HashAlgorithm, _decode_HashAlgorithm, _encode_HashAlgorithm } from "../SEC1-v1-9/HashAlgorithm.ta";
export { HashAlgorithm, _decode_HashAlgorithm, _encode_HashAlgorithm } from "../SEC1-v1-9/HashAlgorithm.ta";


/* START_OF_SYMBOL_DEFINITION SpecifiedECDomain */
/**
 * @summary SpecifiedECDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecifiedECDomain ::= SEQUENCE {
 *     version     SpecifiedECDomainVersion(ecdpVer1 | ecdpVer2 | ecdpVer3, ...),
 *     fieldID     FieldID {{FieldTypes}},
 *     curve       Curve,
 *     base        ECPoint,
 *     order       INTEGER,
 *     cofactor    INTEGER OPTIONAL,
 *     hash        HashAlgorithm OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SpecifiedECDomain {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: SpecifiedECDomainVersion,
        /**
         * @summary `fieldID`.
         * @public
         * @readonly
         */
        readonly fieldID: FieldID,
        /**
         * @summary `curve`.
         * @public
         * @readonly
         */
        readonly curve: Curve,
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: ECPoint,
        /**
         * @summary `order`.
         * @public
         * @readonly
         */
        readonly order: INTEGER,
        /**
         * @summary `cofactor`.
         * @public
         * @readonly
         */
        readonly cofactor: OPTIONAL<INTEGER>,
        /**
         * @summary `hash`.
         * @public
         * @readonly
         */
        readonly hash: OPTIONAL<HashAlgorithm>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SpecifiedECDomain
     * @description
     * 
     * This takes an `object` and converts it to a `SpecifiedECDomain`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpecifiedECDomain`.
     * @returns {SpecifiedECDomain}
     */
    public static _from_object (_o: { [_K in keyof (SpecifiedECDomain)]: (SpecifiedECDomain)[_K] }): SpecifiedECDomain {
        return new SpecifiedECDomain(_o.version, _o.fieldID, _o.curve, _o.base, _o.order, _o.cofactor, _o.hash, _o._unrecognizedExtensionsList);
    }


}
/* END_OF_SYMBOL_DEFINITION SpecifiedECDomain */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecifiedECDomain */
/**
 * @summary The Leading Root Component Types of SpecifiedECDomain
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpecifiedECDomain: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("fieldID", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("curve", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("base", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("order", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("cofactor", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("hash", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecifiedECDomain */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecifiedECDomain */
/**
 * @summary The Trailing Root Component Types of SpecifiedECDomain
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpecifiedECDomain: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecifiedECDomain */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecifiedECDomain */
/**
 * @summary The Extension Addition Component Types of SpecifiedECDomain
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpecifiedECDomain: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecifiedECDomain */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecifiedECDomain */
let _cached_decoder_for_SpecifiedECDomain: $.ASN1Decoder<SpecifiedECDomain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecifiedECDomain */

/* START_OF_SYMBOL_DEFINITION _decode_SpecifiedECDomain */
/**
 * @summary Decodes an ASN.1 element into a(n) SpecifiedECDomain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecifiedECDomain} The decoded data structure.
 */
export
function _decode_SpecifiedECDomain (el: _Element) {
    if (!_cached_decoder_for_SpecifiedECDomain) { _cached_decoder_for_SpecifiedECDomain = function (el: _Element): SpecifiedECDomain {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: SpecifiedECDomainVersion;
    let fieldID!: FieldID;
    let curve!: Curve;
    let base!: ECPoint;
    let order!: INTEGER;
    let cofactor: OPTIONAL<INTEGER>;
    let hash: OPTIONAL<HashAlgorithm>;
    let _unrecognizedExtensionsList: _Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_SpecifiedECDomainVersion(_el); },
        "fieldID": (_el: _Element): void => { fieldID = _decode_FieldID(_el); },
        "curve": (_el: _Element): void => { curve = _decode_Curve(_el); },
        "base": (_el: _Element): void => { base = _decode_ECPoint(_el); },
        "order": (_el: _Element): void => { order = $._decodeInteger(_el); },
        "cofactor": (_el: _Element): void => { cofactor = $._decodeInteger(_el); },
        "hash": (_el: _Element): void => { hash = _decode_HashAlgorithm(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SpecifiedECDomain,
        _extension_additions_list_spec_for_SpecifiedECDomain,
        _root_component_type_list_2_spec_for_SpecifiedECDomain,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SpecifiedECDomain( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        fieldID,
        curve,
        base,
        order,
        cofactor,
        hash,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SpecifiedECDomain(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SpecifiedECDomain */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecifiedECDomain */
let _cached_encoder_for_SpecifiedECDomain: $.ASN1Encoder<SpecifiedECDomain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecifiedECDomain */

/* START_OF_SYMBOL_DEFINITION _encode_SpecifiedECDomain */
/**
 * @summary Encodes a(n) SpecifiedECDomain into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecifiedECDomain, encoded as an ASN.1 Element.
 */
export
function _encode_SpecifiedECDomain (value: SpecifiedECDomain, elGetter: $.ASN1Encoder<SpecifiedECDomain>) {
    if (!_cached_encoder_for_SpecifiedECDomain) { _cached_encoder_for_SpecifiedECDomain = function (value: SpecifiedECDomain, elGetter: $.ASN1Encoder<SpecifiedECDomain>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SpecifiedECDomainVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_FieldID(value.fieldID, $.BER),
            /* REQUIRED   */ _encode_Curve(value.curve, $.BER),
            /* REQUIRED   */ _encode_ECPoint(value.base, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.order, $.BER),
            /* IF_ABSENT  */ ((value.cofactor === undefined) ? undefined : $._encodeInteger(value.cofactor, $.BER)),
            /* IF_ABSENT  */ ((value.hash === undefined) ? undefined : _encode_HashAlgorithm(value.hash, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpecifiedECDomain(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SpecifiedECDomain */

/* eslint-enable */

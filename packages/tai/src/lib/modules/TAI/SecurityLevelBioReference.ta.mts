/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SecurityLevelBioRef, _decode_SecurityLevelBioRef, _encode_SecurityLevelBioRef } from "../TAI/SecurityLevelBioRef.ta.mjs";

/**
 * @summary SecurityLevelBioReference
 * @description
 *
 * Maps a security-level identifier to the modality policy and
 * biometric parameters for that level. Semantics of levels are
 * out of scope; a level indexes parameter information in the
 * BPU's biometric policy. Recorded in certificates as an integer
 * 1 (lowest) to 100 (highest). ITU-T Rec. X.1089 (05/2008)
 * [§3.2.12](https://www.itu.int/rec/T-REC-X.1089-200805-I),
 * §9.3–9.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLevelBioReference ::= SEQUENCE {
 *   securityLevelNum     INTEGER,
 *   securityLevelBioRef  SecurityLevelBioRef
 * }
 * ```
 * 
 */
export
class SecurityLevelBioReference {
    constructor (
        /**
         * @summary `securityLevelNum`.
         * @description
         *
         * Identifier for this security level. Distinct among
         * `bioSecLevelReference` attributes in one BPC. X.1089
         * records a security level as 1 (lowest) to 100
         * (highest). X.1089 §3.2.12, §9.3–9.4.
         *
         * @public
         * @readonly
         */
        readonly securityLevelNum: INTEGER,
        /**
         * @summary `securityLevelBioRef`.
         * @description
         *
         * Modality policy and biometric parameters for this
         * level. X.1089 §9.4, §9.6.
         *
         * @public
         * @readonly
         */
        readonly securityLevelBioRef: SecurityLevelBioRef
    ) {}

    /**
     * @summary Restructures an object into a SecurityLevelBioReference
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityLevelBioReference`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityLevelBioReference`.
     * @returns {SecurityLevelBioReference}
     */
    public static _from_object (_o: { [_K in keyof (SecurityLevelBioReference)]: (SecurityLevelBioReference)[_K] }): SecurityLevelBioReference {
        return new SecurityLevelBioReference(_o.securityLevelNum, _o.securityLevelBioRef);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityLevelBioReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityLevelBioReference: $.ComponentSpec[] = [
    new $.ComponentSpec("securityLevelNum", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("securityLevelBioRef", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SecurityLevelBioReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityLevelBioReference: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityLevelBioReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityLevelBioReference: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityLevelBioReference: $.ASN1Decoder<SecurityLevelBioReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLevelBioReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLevelBioReference} The decoded data structure.
 */
export
function _decode_SecurityLevelBioReference (el: _Element): SecurityLevelBioReference {
    if (!_cached_decoder_for_SecurityLevelBioReference) { _cached_decoder_for_SecurityLevelBioReference = function (el: _Element): SecurityLevelBioReference {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SecurityLevelBioReference contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "securityLevelNum";
    sequence[1].name = "securityLevelBioRef";
    let securityLevelNum!: INTEGER;
    let securityLevelBioRef!: SecurityLevelBioRef;
    securityLevelNum = $._decodeInteger(sequence[0]);
    securityLevelBioRef = _decode_SecurityLevelBioRef(sequence[1]);
    return new SecurityLevelBioReference(
        securityLevelNum,
        securityLevelBioRef,

    );
}; }
    return _cached_decoder_for_SecurityLevelBioReference(el);
}

let _cached_encoder_for_SecurityLevelBioReference: $.ASN1Encoder<SecurityLevelBioReference> | null = null;

/**
 * @summary Encodes a(n) SecurityLevelBioReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLevelBioReference, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityLevelBioReference (value: SecurityLevelBioReference, elGetter: $.ASN1Encoder<SecurityLevelBioReference>): _Element {
    if (!_cached_encoder_for_SecurityLevelBioReference) { _cached_encoder_for_SecurityLevelBioReference = function (value: SecurityLevelBioReference): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.securityLevelNum, $.BER),
            /* REQUIRED   */ _encode_SecurityLevelBioRef(value.securityLevelBioRef, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecurityLevelBioReference(value, elGetter);
}


/* eslint-enable */

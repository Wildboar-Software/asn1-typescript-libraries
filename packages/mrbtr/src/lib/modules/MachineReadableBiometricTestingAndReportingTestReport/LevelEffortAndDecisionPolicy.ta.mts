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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LevelAndPolicy, _decode_LevelAndPolicy, _encode_LevelAndPolicy } from "../MachineReadableBiometricTestingAndReportingTestReport/LevelAndPolicy.ta.mjs";
// export { LevelAndPolicy, _decode_LevelAndPolicy, _encode_LevelAndPolicy } from "../MachineReadableBiometricTestingAndReportingTestReport/LevelAndPolicy.ta.mjs";


/**
 * @summary LevelEffortAndDecisionPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LevelEffortAndDecisionPolicy ::= SEQUENCE {
 *     levelAndPolicyEnrol LevelAndPolicy,
 *     levelAndPolicyCmp   LevelAndPolicy
 * }
 * ```
 * 
 * @class
 */
export
class LevelEffortAndDecisionPolicy {
    constructor (
        /**
         * @summary `levelAndPolicyEnrol`.
         * @public
         * @readonly
         */
        readonly levelAndPolicyEnrol: LevelAndPolicy,
        /**
         * @summary `levelAndPolicyCmp`.
         * @public
         * @readonly
         */
        readonly levelAndPolicyCmp: LevelAndPolicy
    ) {}

    /**
     * @summary Restructures an object into a LevelEffortAndDecisionPolicy
     * @description
     * 
     * This takes an `object` and converts it to a `LevelEffortAndDecisionPolicy`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LevelEffortAndDecisionPolicy`.
     * @returns {LevelEffortAndDecisionPolicy}
     */
    public static _from_object (_o: { [_K in keyof (LevelEffortAndDecisionPolicy)]: (LevelEffortAndDecisionPolicy)[_K] }): LevelEffortAndDecisionPolicy {
        return new LevelEffortAndDecisionPolicy(_o.levelAndPolicyEnrol, _o.levelAndPolicyCmp);
    }


}

/**
 * @summary The Leading Root Component Types of LevelEffortAndDecisionPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LevelEffortAndDecisionPolicy: $.ComponentSpec[] = [
    new $.ComponentSpec("levelAndPolicyEnrol", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("levelAndPolicyCmp", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LevelEffortAndDecisionPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LevelEffortAndDecisionPolicy: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LevelEffortAndDecisionPolicy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LevelEffortAndDecisionPolicy: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LevelEffortAndDecisionPolicy: $.ASN1Decoder<LevelEffortAndDecisionPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LevelEffortAndDecisionPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LevelEffortAndDecisionPolicy (el: _Element): LevelEffortAndDecisionPolicy {
    if (!_cached_decoder_for_LevelEffortAndDecisionPolicy) { _cached_decoder_for_LevelEffortAndDecisionPolicy = function (el: _Element): LevelEffortAndDecisionPolicy {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LevelEffortAndDecisionPolicy contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "levelAndPolicyEnrol";
    sequence[1].name = "levelAndPolicyCmp";
    let levelAndPolicyEnrol!: LevelAndPolicy;
    let levelAndPolicyCmp!: LevelAndPolicy;
    levelAndPolicyEnrol = _decode_LevelAndPolicy(sequence[0]);
    levelAndPolicyCmp = _decode_LevelAndPolicy(sequence[1]);
    return new LevelEffortAndDecisionPolicy(
        levelAndPolicyEnrol,
        levelAndPolicyCmp,

    );
}; }
    return _cached_decoder_for_LevelEffortAndDecisionPolicy(el);
}

let _cached_encoder_for_LevelEffortAndDecisionPolicy: $.ASN1Encoder<LevelEffortAndDecisionPolicy> | null = null;

/**
 * @summary Encodes a(n) LevelEffortAndDecisionPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LevelEffortAndDecisionPolicy, encoded as an ASN.1 Element.
 */
export
function _encode_LevelEffortAndDecisionPolicy (value: LevelEffortAndDecisionPolicy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LevelEffortAndDecisionPolicy) { _cached_encoder_for_LevelEffortAndDecisionPolicy = function (value: LevelEffortAndDecisionPolicy, elGetter: $.ASN1Encoder<LevelEffortAndDecisionPolicy>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LevelAndPolicy(value.levelAndPolicyEnrol, $.BER),
            /* REQUIRED   */ _encode_LevelAndPolicy(value.levelAndPolicyCmp, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LevelEffortAndDecisionPolicy(value, elGetter);
}


/* eslint-enable */

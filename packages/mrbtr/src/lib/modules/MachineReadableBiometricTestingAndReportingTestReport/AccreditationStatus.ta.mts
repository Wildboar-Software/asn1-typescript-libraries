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
import { AccreditingBody, _decode_AccreditingBody, _encode_AccreditingBody } from "../MachineReadableBiometricTestingAndReportingTestReport/AccreditingBody.ta.mjs";
// export { AccreditingBody, _decode_AccreditingBody, _encode_AccreditingBody } from "../MachineReadableBiometricTestingAndReportingTestReport/AccreditingBody.ta.mjs";
import { ScopeAccreditation, _decode_ScopeAccreditation, _encode_ScopeAccreditation } from "../MachineReadableBiometricTestingAndReportingTestReport/ScopeAccreditation.ta.mjs";
// export { ScopeAccreditation, _decode_ScopeAccreditation, _encode_ScopeAccreditation } from "../MachineReadableBiometricTestingAndReportingTestReport/ScopeAccreditation.ta.mjs";


/**
 * @summary AccreditationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccreditationStatus ::= SEQUENCE {
 *     accreditingBodies   SEQUENCE OF AccreditingBody,
 *     scopeAccreditation  ScopeAccreditation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AccreditationStatus {
    constructor (
        /**
         * @summary `accreditingBodies`.
         * @public
         * @readonly
         */
        readonly accreditingBodies: AccreditingBody[],
        /**
         * @summary `scopeAccreditation`.
         * @public
         * @readonly
         */
        readonly scopeAccreditation: OPTIONAL<ScopeAccreditation>
    ) {}

    /**
     * @summary Restructures an object into a AccreditationStatus
     * @description
     * 
     * This takes an `object` and converts it to a `AccreditationStatus`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccreditationStatus`.
     * @returns {AccreditationStatus}
     */
    public static _from_object (_o: { [_K in keyof (AccreditationStatus)]: (AccreditationStatus)[_K] }): AccreditationStatus {
        return new AccreditationStatus(_o.accreditingBodies, _o.scopeAccreditation);
    }


}

/**
 * @summary The Leading Root Component Types of AccreditationStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccreditationStatus: $.ComponentSpec[] = [
    new $.ComponentSpec("accreditingBodies", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("scopeAccreditation", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AccreditationStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccreditationStatus: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccreditationStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccreditationStatus: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccreditationStatus: $.ASN1Decoder<AccreditationStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccreditationStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccreditationStatus (el: _Element): AccreditationStatus {
    if (!_cached_decoder_for_AccreditationStatus) { _cached_decoder_for_AccreditationStatus = function (el: _Element): AccreditationStatus {
    let accreditingBodies!: AccreditingBody[];
    let scopeAccreditation: OPTIONAL<ScopeAccreditation>;
    const callbacks: $.DecodingMap = {
        "accreditingBodies": (_el: _Element): void => { accreditingBodies = $._decodeSequenceOf<AccreditingBody>(() => _decode_AccreditingBody)(_el); },
        "scopeAccreditation": (_el: _Element): void => { scopeAccreditation = _decode_ScopeAccreditation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccreditationStatus,
        _extension_additions_list_spec_for_AccreditationStatus,
        _root_component_type_list_2_spec_for_AccreditationStatus,
        undefined,
    );
    return new AccreditationStatus(
        accreditingBodies,
        scopeAccreditation
    );
}; }
    return _cached_decoder_for_AccreditationStatus(el);
}

let _cached_encoder_for_AccreditationStatus: $.ASN1Encoder<AccreditationStatus> | null = null;

/**
 * @summary Encodes a(n) AccreditationStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccreditationStatus, encoded as an ASN.1 Element.
 */
export
function _encode_AccreditationStatus (value: AccreditationStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccreditationStatus) { _cached_encoder_for_AccreditationStatus = function (value: AccreditationStatus, elGetter: $.ASN1Encoder<AccreditationStatus>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<AccreditingBody>(() => _encode_AccreditingBody, $.BER), $.BER)(value.accreditingBodies, $.BER),
            /* IF_ABSENT */ ((value.scopeAccreditation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ScopeAccreditation, $.BER)(value.scopeAccreditation, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AccreditationStatus(value, elGetter);
}


/* eslint-enable */

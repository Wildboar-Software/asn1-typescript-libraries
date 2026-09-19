/* eslint-disable */
import {
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
import { IdentificationTestLab, _decode_IdentificationTestLab, _encode_IdentificationTestLab } from "../MachineReadableBiometricTestingAndReportingTestReport/IdentificationTestLab.ta.mjs";
// export { IdentificationTestLab, _decode_IdentificationTestLab, _encode_IdentificationTestLab } from "../MachineReadableBiometricTestingAndReportingTestReport/IdentificationTestLab.ta.mjs";
import { AccreditationStatus, _decode_AccreditationStatus, _encode_AccreditationStatus } from "../MachineReadableBiometricTestingAndReportingTestReport/AccreditationStatus.ta.mjs";
// export { AccreditationStatus, _decode_AccreditationStatus, _encode_AccreditationStatus } from "../MachineReadableBiometricTestingAndReportingTestReport/AccreditationStatus.ta.mjs";


/**
 * @summary TestLabInformation
 * @description
 *
 * Identity of the test laboratory and its accreditation status
 * (Clause 6.4.3, Annex B.5). Presence of accreditation fields does
 * not imply a requirement that labs be accredited.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TestLabInformation ::= SEQUENCE {
 *     identificationTestLab   IdentificationTestLab,
 *     accreditationStatus     AccreditationStatus
 * }
 * ```
 * 
 * @class
 */
export
class TestLabInformation {
    constructor (
        /**
         * @summary `identificationTestLab`.
         * @description
         *
         * Name, location, implementor, signatory, and contact for the
         * laboratory (Clause 6.4.3).
         *
         * @public
         * @readonly
         */
        readonly identificationTestLab: IdentificationTestLab,
        /**
         * @summary `accreditationStatus`.
         * @description
         *
         * Accrediting bodies and optional scope. If no accreditation is
         * claimed, Annex B.5 requires an "accreditation not claimed"
         * entry.
         *
         * @public
         * @readonly
         */
        readonly accreditationStatus: AccreditationStatus
    ) {}

    /**
     * @summary Restructures an object into a TestLabInformation
     * @description
     * 
     * This takes an `object` and converts it to a `TestLabInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestLabInformation`.
     * @returns {TestLabInformation}
     */
    public static _from_object (_o: { [_K in keyof (TestLabInformation)]: (TestLabInformation)[_K] }): TestLabInformation {
        return new TestLabInformation(_o.identificationTestLab, _o.accreditationStatus);
    }


}

/**
 * @summary The Leading Root Component Types of TestLabInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TestLabInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("identificationTestLab", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accreditationStatus", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TestLabInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TestLabInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TestLabInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TestLabInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TestLabInformation: $.ASN1Decoder<TestLabInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestLabInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TestLabInformation (el: _Element): TestLabInformation {
    if (!_cached_decoder_for_TestLabInformation) { _cached_decoder_for_TestLabInformation = function (el: _Element): TestLabInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TestLabInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identificationTestLab";
    sequence[1].name = "accreditationStatus";
    let identificationTestLab!: IdentificationTestLab;
    let accreditationStatus!: AccreditationStatus;
    identificationTestLab = _decode_IdentificationTestLab(sequence[0]);
    accreditationStatus = _decode_AccreditationStatus(sequence[1]);
    return new TestLabInformation(
        identificationTestLab,
        accreditationStatus,

    );
}; }
    return _cached_decoder_for_TestLabInformation(el);
}

let _cached_encoder_for_TestLabInformation: $.ASN1Encoder<TestLabInformation> | null = null;

/**
 * @summary Encodes a(n) TestLabInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestLabInformation, encoded as an ASN.1 Element.
 */
export
function _encode_TestLabInformation (value: TestLabInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TestLabInformation) { _cached_encoder_for_TestLabInformation = function (value: TestLabInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_IdentificationTestLab, $.BER)(value.identificationTestLab, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccreditationStatus, $.BER)(value.accreditationStatus, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TestLabInformation(value, elGetter);
}


/* eslint-enable */

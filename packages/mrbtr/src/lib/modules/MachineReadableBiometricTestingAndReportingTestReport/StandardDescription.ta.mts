/* eslint-disable */
import {
    VisibleString,
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
import { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";
// export { Date, _decode_Date, _encode_Date } from "../MachineReadableBiometricTestingAndReportingTestReport/Date.ta.mjs";


/**
 * @summary StandardDescription
 * @description
 *
 * Testing standard claimed for the test (Clause 6.4.3, Annex B.6).
 * Presence indicates the laboratory claims conformance to the listed
 * standard.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StandardDescription ::= SEQUENCE {
 *     standardName            VisibleString,
 *     standardNumber          VisibleString,
 *     standardPart            VisibleString,
 *     standardPublicationDate Date
 * }
 * ```
 * 
 * @class
 */
export
class StandardDescription {
    constructor (
        /**
         * @summary `standardName`.
         * @description
         *
         * Name of the standard, e.g. "Biometric Testing and Reporting —
         * Principles and Framework" (Clause 6.4.3).
         *
         * @public
         * @readonly
         */
        readonly standardName: VisibleString,
        /**
         * @summary `standardNumber`.
         * @description
         *
         * Series number, e.g. `"19795"` (Clause 6.4.3).
         *
         * @public
         * @readonly
         */
        readonly standardNumber: VisibleString,
        /**
         * @summary `standardPart`.
         * @description
         *
         * Part number of the standard series (Clause 6.4.3).
         *
         * @public
         * @readonly
         */
        readonly standardPart: VisibleString,
        /**
         * @summary `standardPublicationDate`.
         * @description
         *
         * Publication date of the cited document (Clause 6.4.3).
         *
         * @public
         * @readonly
         */
        readonly standardPublicationDate: Date
    ) {}

    /**
     * @summary Restructures an object into a StandardDescription
     * @description
     * 
     * This takes an `object` and converts it to a `StandardDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StandardDescription`.
     * @returns {StandardDescription}
     */
    public static _from_object (_o: { [_K in keyof (StandardDescription)]: (StandardDescription)[_K] }): StandardDescription {
        return new StandardDescription(_o.standardName, _o.standardNumber, _o.standardPart, _o.standardPublicationDate);
    }


}

/**
 * @summary The Leading Root Component Types of StandardDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StandardDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("standardName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("standardNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("standardPart", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("standardPublicationDate", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of StandardDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StandardDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StandardDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StandardDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StandardDescription: $.ASN1Decoder<StandardDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StandardDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StandardDescription (el: _Element): StandardDescription {
    if (!_cached_decoder_for_StandardDescription) { _cached_decoder_for_StandardDescription = function (el: _Element): StandardDescription {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("StandardDescription contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "standardName";
    sequence[1].name = "standardNumber";
    sequence[2].name = "standardPart";
    sequence[3].name = "standardPublicationDate";
    let standardName!: VisibleString;
    let standardNumber!: VisibleString;
    let standardPart!: VisibleString;
    let standardPublicationDate!: Date;
    standardName = $._decodeVisibleString(sequence[0]);
    standardNumber = $._decodeVisibleString(sequence[1]);
    standardPart = $._decodeVisibleString(sequence[2]);
    standardPublicationDate = _decode_Date(sequence[3]);
    return new StandardDescription(
        standardName,
        standardNumber,
        standardPart,
        standardPublicationDate,

    );
}; }
    return _cached_decoder_for_StandardDescription(el);
}

let _cached_encoder_for_StandardDescription: $.ASN1Encoder<StandardDescription> | null = null;

/**
 * @summary Encodes a(n) StandardDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StandardDescription, encoded as an ASN.1 Element.
 */
export
function _encode_StandardDescription (value: StandardDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StandardDescription) { _cached_encoder_for_StandardDescription = function (value: StandardDescription): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.standardName, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.standardNumber, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.standardPart, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Date, $.BER)(value.standardPublicationDate, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StandardDescription(value, elGetter);
}


/* eslint-enable */

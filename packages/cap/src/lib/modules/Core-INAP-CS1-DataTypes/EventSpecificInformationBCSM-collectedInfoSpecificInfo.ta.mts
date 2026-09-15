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
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../Core-INAP-CS1-DataTypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../Core-INAP-CS1-DataTypes/CalledPartyNumber.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_collectedInfoSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-collectedInfoSpecificInfo ::= SEQUENCE {
 *     calledPartyNumber     [0] CalledPartyNumber
 *     --...--
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_collectedInfoSpecificInfo {
    constructor (
        /**
         * @summary `calledPartyNumber`.
         * @public
         * @readonly
         */
        readonly calledPartyNumber: CalledPartyNumber
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_collectedInfoSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_collectedInfoSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_collectedInfoSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_collectedInfoSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_collectedInfoSpecificInfo)]: (EventSpecificInformationBCSM_collectedInfoSpecificInfo)[_K] }): EventSpecificInformationBCSM_collectedInfoSpecificInfo {
        return new EventSpecificInformationBCSM_collectedInfoSpecificInfo(_o.calledPartyNumber);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_collectedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartyNumber", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_collectedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_collectedInfoSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_collectedInfoSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_collectedInfoSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_collectedInfoSpecificInfo (el: _Element): EventSpecificInformationBCSM_collectedInfoSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_collectedInfoSpecificInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EventSpecificInformationBCSM-collectedInfoSpecificInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "calledPartyNumber";
    let calledPartyNumber!: CalledPartyNumber;
    calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(sequence[0]);
    return new EventSpecificInformationBCSM_collectedInfoSpecificInfo(
        calledPartyNumber,

    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_collectedInfoSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_collectedInfoSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_collectedInfoSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_collectedInfoSpecificInfo (value: EventSpecificInformationBCSM_collectedInfoSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo = function (value: EventSpecificInformationBCSM_collectedInfoSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_collectedInfoSpecificInfo(value, elGetter);
}


/* eslint-enable */

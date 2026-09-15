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
import { RequestedInformationType, _enum_for_RequestedInformationType, _decode_RequestedInformationType, _encode_RequestedInformationType } from "../Core-INAP-CS1-DataTypes/RequestedInformationType.ta.mjs";
// export { RequestedInformationType, _enum_for_RequestedInformationType, RequestedInformationType_callAttemptElapsedTime /* IMPORTED_LONG_ENUMERATION_ITEM */, callAttemptElapsedTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedInformationType_callStopTime /* IMPORTED_LONG_ENUMERATION_ITEM */, callStopTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedInformationType_callConnectedElapsedTime /* IMPORTED_LONG_ENUMERATION_ITEM */, callConnectedElapsedTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedInformationType_calledAddress /* IMPORTED_LONG_ENUMERATION_ITEM */, calledAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedInformationType_releaseCause /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseCause /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestedInformationType, _encode_RequestedInformationType } from "../Core-INAP-CS1-DataTypes/RequestedInformationType.ta.mjs";
import { RequestedInformationValue, _decode_RequestedInformationValue, _encode_RequestedInformationValue } from "../Core-INAP-CS1-DataTypes/RequestedInformationValue.ta.mjs";
// export { RequestedInformationValue, _decode_RequestedInformationValue, _encode_RequestedInformationValue } from "../Core-INAP-CS1-DataTypes/RequestedInformationValue.ta.mjs";


/**
 * @summary RequestedInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformation ::= SEQUENCE {
 *      requestedInformationType     [0] RequestedInformationType,
 *      requestedInformationValue     [1] RequestedInformationValue
 *      }
 * ```
 * 
 * @class
 */
export
class RequestedInformation {
    constructor (
        /**
         * @summary `requestedInformationType`.
         * @public
         * @readonly
         */
        readonly requestedInformationType: RequestedInformationType,
        /**
         * @summary `requestedInformationValue`.
         * @public
         * @readonly
         */
        readonly requestedInformationValue: RequestedInformationValue
    ) {}

    /**
     * @summary Restructures an object into a RequestedInformation
     * @description
     * 
     * This takes an `object` and converts it to a `RequestedInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestedInformation`.
     * @returns {RequestedInformation}
     */
    public static _from_object (_o: { [_K in keyof (RequestedInformation)]: (RequestedInformation)[_K] }): RequestedInformation {
        return new RequestedInformation(_o.requestedInformationType, _o.requestedInformationValue);
    }

        /**
         * @summary The enum used as the type of the component `requestedInformationType`
         * @public
         * @static
         */

    public static _enum_for_requestedInformationType = _enum_for_RequestedInformationType;
}

/**
 * @summary The Leading Root Component Types of RequestedInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestedInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedInformationType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("requestedInformationValue", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RequestedInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestedInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestedInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestedInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestedInformation: $.ASN1Decoder<RequestedInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedInformation (el: _Element): RequestedInformation {
    if (!_cached_decoder_for_RequestedInformation) { _cached_decoder_for_RequestedInformation = function (el: _Element): RequestedInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RequestedInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "requestedInformationType";
    sequence[1].name = "requestedInformationValue";
    let requestedInformationType!: RequestedInformationType;
    let requestedInformationValue!: RequestedInformationValue;
    requestedInformationType = $._decode_implicit<RequestedInformationType>(() => _decode_RequestedInformationType)(sequence[0]);
    requestedInformationValue = $._decode_explicit<RequestedInformationValue>(() => _decode_RequestedInformationValue)(sequence[1]);
    return new RequestedInformation(
        requestedInformationType,
        requestedInformationValue,

    );
}; }
    return _cached_decoder_for_RequestedInformation(el);
}

let _cached_encoder_for_RequestedInformation: $.ASN1Encoder<RequestedInformation> | null = null;

/**
 * @summary Encodes a(n) RequestedInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedInformation, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedInformation (value: RequestedInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedInformation) { _cached_encoder_for_RequestedInformation = function (value: RequestedInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedInformationType, $.BER)(value.requestedInformationType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_RequestedInformationValue, $.BER)(value.requestedInformationValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestedInformation(value, elGetter);
}


/* eslint-enable */

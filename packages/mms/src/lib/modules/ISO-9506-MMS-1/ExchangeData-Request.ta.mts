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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";


/**
 * @summary ExchangeData_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExchangeData-Request ::= SEQUENCE {
 *    dataExchangeName           [0] ObjectName,
 *    listOfRequestData          [1] IMPLICIT SEQUENCE OF Data }
 * ```
 * 
 * @class
 */
export
class ExchangeData_Request {
    constructor (
        /**
         * @summary `dataExchangeName`.
         * @public
         * @readonly
         */
        readonly dataExchangeName: ObjectName,
        /**
         * @summary `listOfRequestData`.
         * @public
         * @readonly
         */
        readonly listOfRequestData: Data[]
    ) {}

    /**
     * @summary Restructures an object into a ExchangeData_Request
     * @description
     * 
     * This takes an `object` and converts it to a `ExchangeData_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExchangeData_Request`.
     * @returns {ExchangeData_Request}
     */
    public static _from_object (_o: { [_K in keyof (ExchangeData_Request)]: (ExchangeData_Request)[_K] }): ExchangeData_Request {
        return new ExchangeData_Request(_o.dataExchangeName, _o.listOfRequestData);
    }


}

/**
 * @summary The Leading Root Component Types of ExchangeData_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExchangeData_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("dataExchangeName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfRequestData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ExchangeData_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExchangeData_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExchangeData_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExchangeData_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExchangeData_Request: $.ASN1Decoder<ExchangeData_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExchangeData_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExchangeData_Request (el: _Element): ExchangeData_Request {
    if (!_cached_decoder_for_ExchangeData_Request) { _cached_decoder_for_ExchangeData_Request = function (el: _Element): ExchangeData_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ExchangeData-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dataExchangeName";
    sequence[1].name = "listOfRequestData";
    let dataExchangeName!: ObjectName;
    let listOfRequestData!: Data[];
    dataExchangeName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    listOfRequestData = $._decode_implicit<Data[]>(() => $._decodeSequenceOf<Data>(() => _decode_Data))(sequence[1]);
    return new ExchangeData_Request(
        dataExchangeName,
        listOfRequestData,

    );
}; }
    return _cached_decoder_for_ExchangeData_Request(el);
}

let _cached_encoder_for_ExchangeData_Request: $.ASN1Encoder<ExchangeData_Request> | null = null;

/**
 * @summary Encodes a(n) ExchangeData_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExchangeData_Request, encoded as an ASN.1 Element.
 */
export
function _encode_ExchangeData_Request (value: ExchangeData_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExchangeData_Request) { _cached_encoder_for_ExchangeData_Request = function (value: ExchangeData_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.dataExchangeName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Data>(() => _encode_Data, $.BER), $.BER)(value.listOfRequestData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExchangeData_Request(value, elGetter);
}


/* eslint-enable */

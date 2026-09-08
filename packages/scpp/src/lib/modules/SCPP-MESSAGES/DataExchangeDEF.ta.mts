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
import { SpamFilterData, _decode_SpamFilterData, _encode_SpamFilterData } from "../SCPP-MESSAGES/SpamFilterData.ta.mjs";


/**
 * @summary DataExchangeDEF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataExchangeDEF ::= SEQUENCE {csData  SET OF SpamFilterData,
 *                               ...
 * }
 * ```
 * 
 * @class
 */
export
class DataExchangeDEF {
    constructor (
        /**
         * @summary `csData`.
         * @public
         * @readonly
         */
        readonly csData: SpamFilterData[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DataExchangeDEF
     * @description
     * 
     * This takes an `object` and converts it to a `DataExchangeDEF`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataExchangeDEF`.
     * @returns {DataExchangeDEF}
     */
    public static _from_object (_o: { [_K in keyof (DataExchangeDEF)]: (DataExchangeDEF)[_K] }): DataExchangeDEF {
        return new DataExchangeDEF(_o.csData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DataExchangeDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataExchangeDEF: $.ComponentSpec[] = [
    new $.ComponentSpec("csData", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of DataExchangeDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataExchangeDEF: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataExchangeDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataExchangeDEF: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataExchangeDEF: $.ASN1Decoder<DataExchangeDEF> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataExchangeDEF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataExchangeDEF (el: _Element): DataExchangeDEF {
    if (!_cached_decoder_for_DataExchangeDEF) { _cached_decoder_for_DataExchangeDEF = function (el: _Element): DataExchangeDEF {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("DataExchangeDEF contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "csData";
    const csData = $._decodeSetOf<SpamFilterData>(() => _decode_SpamFilterData)(sequence[0]);
    return new DataExchangeDEF(
        csData,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_DataExchangeDEF(el);
}

let _cached_encoder_for_DataExchangeDEF: $.ASN1Encoder<DataExchangeDEF> | null = null;

/**
 * @summary Encodes a(n) DataExchangeDEF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataExchangeDEF, encoded as an ASN.1 Element.
 */
export
function _encode_DataExchangeDEF (value: DataExchangeDEF, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataExchangeDEF) { _cached_encoder_for_DataExchangeDEF = function (value: DataExchangeDEF): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSetOf<SpamFilterData>(() => _encode_SpamFilterData, $.BER)(value.csData, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataExchangeDEF(value, elGetter);
}


/* eslint-enable */

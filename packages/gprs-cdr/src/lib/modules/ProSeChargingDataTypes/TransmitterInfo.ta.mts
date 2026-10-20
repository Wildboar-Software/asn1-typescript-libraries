/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../ProSeChargingDataTypes/IPAddress.ta.mjs";


/**
 * @summary TransmitterInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransmitterInfo ::= SEQUENCE {
 *    sourceIPaddress   [0] IPAddress,
 *    proSeUEID         [1] IMPLICIT OCTET STRING}
 * ```
 * 
 * @class
 */
export
class TransmitterInfo {
    /**
     * @summary `sourceIPaddress`.
     * @public
     * @readonly
     */
    readonly sourceIPaddress: IPAddress;
    /**
     * @summary `proSeUEID`.
     * @public
     * @readonly
     */
    readonly proSeUEID: OCTET_STRING;

    constructor (
        sourceIPaddress: IPAddress,
        proSeUEID: OCTET_STRING
    ) {
        this.sourceIPaddress = sourceIPaddress;
        this.proSeUEID = proSeUEID;
    }

    /**
     * @summary Restructures an object into a TransmitterInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TransmitterInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransmitterInfo`.
     * @returns {TransmitterInfo}
     */
    public static _from_object (_o: { [_K in keyof (TransmitterInfo)]: (TransmitterInfo)[_K] }): TransmitterInfo {
        return new TransmitterInfo(_o.sourceIPaddress, _o.proSeUEID);
    }


}

/**
 * @summary The Leading Root Component Types of TransmitterInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransmitterInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceIPaddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("proSeUEID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TransmitterInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransmitterInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransmitterInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransmitterInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransmitterInfo: $.ASN1Decoder<TransmitterInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransmitterInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransmitterInfo (el: _Element): TransmitterInfo {
    if (!_cached_decoder_for_TransmitterInfo) { _cached_decoder_for_TransmitterInfo = function (el: _Element): TransmitterInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TransmitterInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sourceIPaddress";
    sequence[1].name = "proSeUEID";
    let sourceIPaddress!: IPAddress;
    let proSeUEID!: OCTET_STRING;
    sourceIPaddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[0]);
    proSeUEID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new TransmitterInfo(
        sourceIPaddress,
        proSeUEID,

    );
}; }
    return _cached_decoder_for_TransmitterInfo(el);
}

let _cached_encoder_for_TransmitterInfo: $.ASN1Encoder<TransmitterInfo> | null = null;

/**
 * @summary Encodes a(n) TransmitterInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransmitterInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TransmitterInfo (value: TransmitterInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransmitterInfo) { _cached_encoder_for_TransmitterInfo = function (value: TransmitterInfo, _elGetter: $.ASN1Encoder<TransmitterInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_IPAddress, $.BER)(value.sourceIPaddress, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.proSeUEID, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_TransmitterInfo(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Destination, _decode_Destination, _encode_Destination } from "../IN-CS3-SCF-SCF-datatypes/Destination.ta.mjs";
// export { Destination, _decode_Destination, _encode_Destination } from "../IN-CS3-SCF-SCF-datatypes/Destination.ta.mjs";
import { ProtocolInfo, _decode_ProtocolInfo, _encode_ProtocolInfo } from "../IN-CS3-SCF-SCF-datatypes/ProtocolInfo.ta.mjs";
// export { ProtocolInfo, _decode_ProtocolInfo, _encode_ProtocolInfo } from "../IN-CS3-SCF-SCF-datatypes/ProtocolInfo.ta.mjs";


/**
 * @summary ReportDestinationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportDestinationInformation ::= SEQUENCE {
 *   destination   [1]  Destination,
 *   protocolInfo  [2]  ProtocolInfo
 * }
 * ```
 * 
 * @class
 */
export
class ReportDestinationInformation {
    /**
     * @summary `destination`.
     * @public
     * @readonly
     */
    readonly destination: Destination;
    /**
     * @summary `protocolInfo`.
     * @public
     * @readonly
     */
    readonly protocolInfo: ProtocolInfo;

    constructor (
        destination: Destination,
        protocolInfo: ProtocolInfo
    ) {
        this.destination = destination;
        this.protocolInfo = protocolInfo;
    }

    /**
     * @summary Restructures an object into a ReportDestinationInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ReportDestinationInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportDestinationInformation`.
     * @returns {ReportDestinationInformation}
     */
    public static _from_object (_o: { [_K in keyof (ReportDestinationInformation)]: (ReportDestinationInformation)[_K] }): ReportDestinationInformation {
        return new ReportDestinationInformation(_o.destination, _o.protocolInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ReportDestinationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportDestinationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("destination", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("protocolInfo", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ReportDestinationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportDestinationInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportDestinationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportDestinationInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportDestinationInformation: $.ASN1Decoder<ReportDestinationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportDestinationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportDestinationInformation (el: _Element): ReportDestinationInformation {
    if (!_cached_decoder_for_ReportDestinationInformation) { _cached_decoder_for_ReportDestinationInformation = function (el: _Element): ReportDestinationInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ReportDestinationInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "destination";
    sequence[1].name = "protocolInfo";
    const destination: Destination = $._decode_implicit<Destination>(() => _decode_Destination)(sequence[0]);
    const protocolInfo: ProtocolInfo = $._decode_explicit<ProtocolInfo>(() => _decode_ProtocolInfo)(sequence[1]);
    return new ReportDestinationInformation(
        destination,
        protocolInfo,

    );
}; }
    return _cached_decoder_for_ReportDestinationInformation(el);
}

let _cached_encoder_for_ReportDestinationInformation: $.ASN1Encoder<ReportDestinationInformation> | null = null;

/**
 * @summary Encodes a(n) ReportDestinationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDestinationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ReportDestinationInformation (value: ReportDestinationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportDestinationInformation) { _cached_encoder_for_ReportDestinationInformation = function (value: ReportDestinationInformation, elGetter: $.ASN1Encoder<ReportDestinationInformation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Destination, $.BER)(value.destination, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ProtocolInfo, $.BER)(value.protocolInfo, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ReportDestinationInformation(value, elGetter);
}


/* eslint-enable */

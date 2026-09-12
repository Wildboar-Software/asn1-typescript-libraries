/* eslint-disable */
import {
    OPTIONAL,
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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { ConfirmedServiceResponse, _decode_ConfirmedServiceResponse, _encode_ConfirmedServiceResponse } from "../ISO-9506-MMS-1/ConfirmedServiceResponse.ta.mjs";
// export { ConfirmedServiceResponse, _decode_ConfirmedServiceResponse, _encode_ConfirmedServiceResponse } from "../ISO-9506-MMS-1/ConfirmedServiceResponse.ta.mjs";
import { Response_Detail, _decode_Response_Detail, _encode_Response_Detail } from "../ISO-9506-MMS-1/Response-Detail.ta.mjs";
// export { Response_Detail, _decode_Response_Detail, _encode_Response_Detail } from "../ISO-9506-MMS-1/Response-Detail.ta.mjs";


/**
 * @summary Confirmed_ResponsePDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Confirmed-ResponsePDU ::= SEQUENCE {
 *    invokeID            Unsigned32,
 *    service             ConfirmedServiceResponse,
 *    ...,
 *    service-ext         [79] Response-Detail OPTIONAL
 *                     -- shall not be transmitted if value is the value
 *                     -- of a tagged type derived from NULL
 *    }
 * ```
 * 
 * @class
 */
export
class Confirmed_ResponsePDU {
    constructor (
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: Unsigned32,
        /**
         * @summary `service`.
         * @public
         * @readonly
         */
        readonly service: ConfirmedServiceResponse,
        /**
         * @summary `service_ext`.
         * @public
         * @readonly
         */
        readonly service_ext: OPTIONAL<Response_Detail>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Confirmed_ResponsePDU
     * @description
     * 
     * This takes an `object` and converts it to a `Confirmed_ResponsePDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Confirmed_ResponsePDU`.
     * @returns {Confirmed_ResponsePDU}
     */
    public static _from_object (_o: { [_K in keyof (Confirmed_ResponsePDU)]: (Confirmed_ResponsePDU)[_K] }): Confirmed_ResponsePDU {
        return new Confirmed_ResponsePDU(_o.invokeID, _o.service, _o.service_ext, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Confirmed_ResponsePDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Confirmed_ResponsePDU: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeID", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("service", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Confirmed_ResponsePDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Confirmed_ResponsePDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Confirmed_ResponsePDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Confirmed_ResponsePDU: $.ComponentSpec[] = [
    new $.ComponentSpec("service-ext", true, $.hasTag(_TagClass.context, 79))
];

let _cached_decoder_for_Confirmed_ResponsePDU: $.ASN1Decoder<Confirmed_ResponsePDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Confirmed_ResponsePDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Confirmed_ResponsePDU (el: _Element): Confirmed_ResponsePDU {
    if (!_cached_decoder_for_Confirmed_ResponsePDU) { _cached_decoder_for_Confirmed_ResponsePDU = function (el: _Element): Confirmed_ResponsePDU {
    let invokeID!: Unsigned32;
    let service!: ConfirmedServiceResponse;
    let service_ext: OPTIONAL<Response_Detail>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "invokeID": (_el: _Element): void => { invokeID = _decode_Unsigned32(_el); },
        "service": (_el: _Element): void => { service = _decode_ConfirmedServiceResponse(_el); },
        "service-ext": (_el: _Element): void => { service_ext = $._decode_explicit<Response_Detail>(() => _decode_Response_Detail)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Confirmed_ResponsePDU,
        _extension_additions_list_spec_for_Confirmed_ResponsePDU,
        _root_component_type_list_2_spec_for_Confirmed_ResponsePDU,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Confirmed_ResponsePDU(
        invokeID,
        service,
        service_ext,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Confirmed_ResponsePDU(el);
}

let _cached_encoder_for_Confirmed_ResponsePDU: $.ASN1Encoder<Confirmed_ResponsePDU> | null = null;

/**
 * @summary Encodes a(n) Confirmed_ResponsePDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Confirmed_ResponsePDU, encoded as an ASN.1 Element.
 */
export
function _encode_Confirmed_ResponsePDU (value: Confirmed_ResponsePDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Confirmed_ResponsePDU) { _cached_encoder_for_Confirmed_ResponsePDU = function (value: Confirmed_ResponsePDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Unsigned32(value.invokeID, $.BER),
            /* REQUIRED   */ _encode_ConfirmedServiceResponse(value.service, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.service_ext === undefined) ? undefined : $._encode_explicit(_TagClass.context, 79, () => _encode_Response_Detail, $.BER)(value.service_ext, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Confirmed_ResponsePDU(value, elGetter);
}


/* eslint-enable */

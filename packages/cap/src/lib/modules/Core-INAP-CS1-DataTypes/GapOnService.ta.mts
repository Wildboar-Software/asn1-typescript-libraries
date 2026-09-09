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
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";


/**
 * @summary GapOnService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapOnService ::= SEQUENCE {
 *      serviceKey     [0] ServiceKey
 *      }
 * ```
 * 
 * @class
 */
export
class GapOnService {
    constructor (
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey
    ) {}

    /**
     * @summary Restructures an object into a GapOnService
     * @description
     * 
     * This takes an `object` and converts it to a `GapOnService`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GapOnService`.
     * @returns {GapOnService}
     */
    public static _from_object (_o: { [_K in keyof (GapOnService)]: (GapOnService)[_K] }): GapOnService {
        return new GapOnService(_o.serviceKey);
    }


}

/**
 * @summary The Leading Root Component Types of GapOnService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GapOnService: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of GapOnService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GapOnService: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GapOnService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GapOnService: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GapOnService: $.ASN1Decoder<GapOnService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapOnService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapOnService (el: _Element): GapOnService {
    if (!_cached_decoder_for_GapOnService) { _cached_decoder_for_GapOnService = function (el: _Element): GapOnService {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("GapOnService contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "serviceKey";
    let serviceKey!: ServiceKey;
    serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(sequence[0]);
    return new GapOnService(
        serviceKey,

    );
}; }
    return _cached_decoder_for_GapOnService(el);
}

let _cached_encoder_for_GapOnService: $.ASN1Encoder<GapOnService> | null = null;

/**
 * @summary Encodes a(n) GapOnService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapOnService, encoded as an ASN.1 Element.
 */
export
function _encode_GapOnService (value: GapOnService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapOnService) { _cached_encoder_for_GapOnService = function (value: GapOnService): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GapOnService(value, elGetter);
}


/* eslint-enable */

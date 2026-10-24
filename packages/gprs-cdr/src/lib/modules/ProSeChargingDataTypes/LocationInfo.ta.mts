/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationInfo
 * @description
 *
 * One location change recorded while the UE is in E-UTRAN coverage during ProSe
 * Direct Communication.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3 and 6.1.3.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInfo ::= SEQUENCE {
 *    uELocation   [0] IMPLICIT OCTET STRING OPTIONAL,
 *    timeStamp    [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class LocationInfo {
    /**
     * @summary `uELocation`.
     * @description
     *
     * UE location after the change, for example the ECGI.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.40 sets UE Location to the 28-bit
     * cell identity of the ECGI, taken from the UE's lower layers.
     *
     * 3GPP TS 32.277 V19.2.0 clause 6.1.3.4.
     *
     * @public
     * @readonly
     */
    readonly uELocation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Time of this location change.
     *
     * 3GPP TS 32.277 V19.2.0 clause 5.1.2.3.
     *
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<OCTET_STRING>;

    constructor (
        uELocation?: OPTIONAL<OCTET_STRING>,
        timeStamp?: OPTIONAL<OCTET_STRING>
    ) {
        this.uELocation = uELocation;
        this.timeStamp = timeStamp;
    
        if (this.timeStamp !== undefined && (this.timeStamp.length !== 9)) {
            throw new ASN1SizeError("LocationInfo.timeStamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a LocationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `LocationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationInfo`.
     * @returns {LocationInfo}
     */
    public static _from_object (_o: { [_K in keyof (LocationInfo)]: (LocationInfo)[_K] }): LocationInfo {
        return new LocationInfo(_o.uELocation, _o.timeStamp);
    }


}

/**
 * @summary The Leading Root Component Types of LocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("uELocation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationInfo: $.ASN1Decoder<LocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInfo (el: _Element): LocationInfo {
    if (!_cached_decoder_for_LocationInfo) { _cached_decoder_for_LocationInfo = function (el: _Element): LocationInfo {
    let uELocation: OPTIONAL<OCTET_STRING>;
    let timeStamp: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "uELocation": (_el: _Element): void => { uELocation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationInfo,
        _extension_additions_list_spec_for_LocationInfo,
        _root_component_type_list_2_spec_for_LocationInfo,
        undefined,
    );
    return new LocationInfo(
        uELocation,
        timeStamp
    );
}; }
    return _cached_decoder_for_LocationInfo(el);
}

let _cached_encoder_for_LocationInfo: $.ASN1Encoder<LocationInfo> | null = null;

/**
 * @summary Encodes a(n) LocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInfo (value: LocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInfo) { _cached_encoder_for_LocationInfo = function (value: LocationInfo, _elGetter: $.ASN1Encoder<LocationInfo>): _Element {
    const _components: _Element[] = [];
    if (value.uELocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.uELocation, $.BER));
    }
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.timeStamp, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocationInfo(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeLocation ::= SEQUENCE {
 *    locationAreaCode   [0] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    routingAreaCode    [1] IMPLICIT OCTET STRING ( SIZE( 1 ) ),
 *    cellId             [2] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    changeTime         [3] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    mCC-MNC            [4] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeLocation {
    /**
     * @summary `locationAreaCode`.
     * @public
     * @readonly
     */
    readonly locationAreaCode: OCTET_STRING;
    /**
     * @summary `routingAreaCode`.
     * @public
     * @readonly
     */
    readonly routingAreaCode: OCTET_STRING;
    /**
     * @summary `cellId`.
     * @public
     * @readonly
     */
    readonly cellId: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `mCC_MNC`.
     * @public
     * @readonly
     */
    readonly mCC_MNC: OPTIONAL<OCTET_STRING>;

    constructor (
        locationAreaCode: OCTET_STRING,
        routingAreaCode: OCTET_STRING,
        cellId: OPTIONAL<OCTET_STRING>,
        changeTime: OCTET_STRING,
        mCC_MNC: OPTIONAL<OCTET_STRING>
    ) {
        this.locationAreaCode = locationAreaCode;
        this.routingAreaCode = routingAreaCode;
        this.cellId = cellId;
        this.changeTime = changeTime;
        this.mCC_MNC = mCC_MNC;
    
        if ((this.locationAreaCode.length !== 2)) {
            throw new ASN1SizeError("ChangeLocation.locationAreaCode violates SIZE constraint");
        }
        if ((this.routingAreaCode.length !== 1)) {
            throw new ASN1SizeError("ChangeLocation.routingAreaCode violates SIZE constraint");
        }
        if (this.cellId !== undefined && (this.cellId.length !== 2)) {
            throw new ASN1SizeError("ChangeLocation.cellId violates SIZE constraint");
        }
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("ChangeLocation.changeTime violates SIZE constraint");
        }
        if (this.mCC_MNC !== undefined && (this.mCC_MNC.length !== 3)) {
            throw new ASN1SizeError("ChangeLocation.mCC_MNC violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ChangeLocation
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeLocation`.
     * @returns {ChangeLocation}
     */
    public static _from_object (_o: { [_K in keyof (ChangeLocation)]: (ChangeLocation)[_K] }): ChangeLocation {
        return new ChangeLocation(_o.locationAreaCode, _o.routingAreaCode, _o.cellId, _o.changeTime, _o.mCC_MNC);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("locationAreaCode", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("routingAreaCode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cellId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mCC-MNC", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ChangeLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeLocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeLocation: $.ASN1Decoder<ChangeLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeLocation (el: _Element): ChangeLocation {
    if (!_cached_decoder_for_ChangeLocation) { _cached_decoder_for_ChangeLocation = function (el: _Element): ChangeLocation {
    let locationAreaCode!: OCTET_STRING;
    let routingAreaCode!: OCTET_STRING;
    let cellId: OPTIONAL<OCTET_STRING>;
    let changeTime!: OCTET_STRING;
    let mCC_MNC: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "locationAreaCode": (_el: _Element): void => { locationAreaCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routingAreaCode": (_el: _Element): void => { routingAreaCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellId": (_el: _Element): void => { cellId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mCC-MNC": (_el: _Element): void => { mCC_MNC = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeLocation,
        _extension_additions_list_spec_for_ChangeLocation,
        _root_component_type_list_2_spec_for_ChangeLocation,
        undefined,
    );
    return new ChangeLocation(
        locationAreaCode,
        routingAreaCode,
        cellId,
        changeTime,
        mCC_MNC
    );
}; }
    return _cached_decoder_for_ChangeLocation(el);
}

let _cached_encoder_for_ChangeLocation: $.ASN1Encoder<ChangeLocation> | null = null;

/**
 * @summary Encodes a(n) ChangeLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeLocation, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeLocation (value: ChangeLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeLocation) { _cached_encoder_for_ChangeLocation = function (value: ChangeLocation, _elGetter: $.ASN1Encoder<ChangeLocation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.locationAreaCode, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.routingAreaCode, $.BER));
    if (value.cellId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.cellId, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    if (value.mCC_MNC !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.mCC_MNC, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChangeLocation(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationAreaAndCell
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationAreaAndCell ::= SEQUENCE {
 *    locationAreaCode   [0] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    cellId             [1] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    mCC-MNC            [2] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class LocationAreaAndCell {
    /**
     * @summary `locationAreaCode`.
     * @public
     * @readonly
     */
    readonly locationAreaCode: OCTET_STRING;
    /**
     * @summary `cellId`.
     * @public
     * @readonly
     */
    readonly cellId: OCTET_STRING;
    /**
     * @summary `mCC_MNC`.
     * @public
     * @readonly
     */
    readonly mCC_MNC: OPTIONAL<OCTET_STRING>;

    constructor (
        locationAreaCode: OCTET_STRING,
        cellId: OCTET_STRING,
        mCC_MNC: OPTIONAL<OCTET_STRING>
    ) {
        this.locationAreaCode = locationAreaCode;
        this.cellId = cellId;
        this.mCC_MNC = mCC_MNC;
    }

    /**
     * @summary Restructures an object into a LocationAreaAndCell
     * @description
     * 
     * This takes an `object` and converts it to a `LocationAreaAndCell`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationAreaAndCell`.
     * @returns {LocationAreaAndCell}
     */
    public static _from_object (_o: { [_K in keyof (LocationAreaAndCell)]: (LocationAreaAndCell)[_K] }): LocationAreaAndCell {
        return new LocationAreaAndCell(_o.locationAreaCode, _o.cellId, _o.mCC_MNC);
    }


}

/**
 * @summary The Leading Root Component Types of LocationAreaAndCell
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationAreaAndCell: $.ComponentSpec[] = [
    new $.ComponentSpec("locationAreaCode", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cellId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mCC-MNC", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LocationAreaAndCell
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationAreaAndCell: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationAreaAndCell
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationAreaAndCell: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationAreaAndCell: $.ASN1Decoder<LocationAreaAndCell> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationAreaAndCell
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationAreaAndCell (el: _Element): LocationAreaAndCell {
    if (!_cached_decoder_for_LocationAreaAndCell) { _cached_decoder_for_LocationAreaAndCell = function (el: _Element): LocationAreaAndCell {
    let locationAreaCode!: OCTET_STRING;
    let cellId!: OCTET_STRING;
    let mCC_MNC: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "locationAreaCode": (_el: _Element): void => { locationAreaCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellId": (_el: _Element): void => { cellId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mCC-MNC": (_el: _Element): void => { mCC_MNC = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationAreaAndCell,
        _extension_additions_list_spec_for_LocationAreaAndCell,
        _root_component_type_list_2_spec_for_LocationAreaAndCell,
        undefined,
    );
    return new LocationAreaAndCell(
        locationAreaCode,
        cellId,
        mCC_MNC
    );
}; }
    return _cached_decoder_for_LocationAreaAndCell(el);
}

let _cached_encoder_for_LocationAreaAndCell: $.ASN1Encoder<LocationAreaAndCell> | null = null;

/**
 * @summary Encodes a(n) LocationAreaAndCell into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationAreaAndCell, encoded as an ASN.1 Element.
 */
export
function _encode_LocationAreaAndCell (value: LocationAreaAndCell, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationAreaAndCell) { _cached_encoder_for_LocationAreaAndCell = function (value: LocationAreaAndCell, elGetter: $.ASN1Encoder<LocationAreaAndCell>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.locationAreaCode, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.cellId, $.BER));
    if (value.mCC_MNC !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.mCC_MNC, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocationAreaAndCell(value, elGetter);
}


/* eslint-enable */

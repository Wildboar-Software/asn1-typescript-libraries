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
 * @summary Location_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Location-info ::= SEQUENCE {
 *    mscNumber             [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    location-area         [2] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    cell-identification   [3] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    mCC-MNC               [4] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class Location_info {
    /**
     * @summary `mscNumber`.
     * @public
     * @readonly
     */
    readonly mscNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `location_area`.
     * @public
     * @readonly
     */
    readonly location_area: OCTET_STRING;
    /**
     * @summary `cell_identification`.
     * @public
     * @readonly
     */
    readonly cell_identification: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mCC_MNC`.
     * @public
     * @readonly
     */
    readonly mCC_MNC: OPTIONAL<OCTET_STRING>;

    constructor (
        mscNumber: OPTIONAL<OCTET_STRING>,
        location_area: OCTET_STRING,
        cell_identification: OPTIONAL<OCTET_STRING>,
        mCC_MNC: OPTIONAL<OCTET_STRING>
    ) {
        this.mscNumber = mscNumber;
        this.location_area = location_area;
        this.cell_identification = cell_identification;
        this.mCC_MNC = mCC_MNC;
    
        if (this.mscNumber !== undefined && (this.mscNumber.length < 1 || this.mscNumber.length > 9)) {
            throw new ASN1SizeError("Location_info.mscNumber violates SIZE constraint");
        }
        if ((this.location_area.length !== 2)) {
            throw new ASN1SizeError("Location_info.location_area violates SIZE constraint");
        }
        if (this.cell_identification !== undefined && (this.cell_identification.length !== 2)) {
            throw new ASN1SizeError("Location_info.cell_identification violates SIZE constraint");
        }
        if (this.mCC_MNC !== undefined && (this.mCC_MNC.length !== 3)) {
            throw new ASN1SizeError("Location_info.mCC_MNC violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a Location_info
     * @description
     * 
     * This takes an `object` and converts it to a `Location_info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Location_info`.
     * @returns {Location_info}
     */
    public static _from_object (_o: { [_K in keyof (Location_info)]: (Location_info)[_K] }): Location_info {
        return new Location_info(_o.mscNumber, _o.location_area, _o.cell_identification, _o.mCC_MNC);
    }


}

/**
 * @summary The Leading Root Component Types of Location_info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Location_info: $.ComponentSpec[] = [
    new $.ComponentSpec("mscNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("location-area", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cell-identification", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mCC-MNC", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of Location_info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Location_info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Location_info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Location_info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Location_info: $.ASN1Decoder<Location_info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Location_info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Location_info (el: _Element): Location_info {
    if (!_cached_decoder_for_Location_info) { _cached_decoder_for_Location_info = function (el: _Element): Location_info {
    let mscNumber: OPTIONAL<OCTET_STRING>;
    let location_area!: OCTET_STRING;
    let cell_identification: OPTIONAL<OCTET_STRING>;
    let mCC_MNC: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "mscNumber": (_el: _Element): void => { mscNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "location-area": (_el: _Element): void => { location_area = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cell-identification": (_el: _Element): void => { cell_identification = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mCC-MNC": (_el: _Element): void => { mCC_MNC = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Location_info,
        _extension_additions_list_spec_for_Location_info,
        _root_component_type_list_2_spec_for_Location_info,
        undefined,
    );
    return new Location_info(
        mscNumber,
        location_area,
        cell_identification,
        mCC_MNC
    );
}; }
    return _cached_decoder_for_Location_info(el);
}

let _cached_encoder_for_Location_info: $.ASN1Encoder<Location_info> | null = null;

/**
 * @summary Encodes a(n) Location_info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Location_info, encoded as an ASN.1 Element.
 */
export
function _encode_Location_info (value: Location_info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Location_info) { _cached_encoder_for_Location_info = function (value: Location_info, _elGetter: $.ASN1Encoder<Location_info>): _Element {
    const _components: _Element[] = [];
    if (value.mscNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.mscNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.location_area, $.BER));
    if (value.cell_identification !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.cell_identification, $.BER));
    }
    if (value.mCC_MNC !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.mCC_MNC, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Location_info(value, elGetter);
}


/* eslint-enable */

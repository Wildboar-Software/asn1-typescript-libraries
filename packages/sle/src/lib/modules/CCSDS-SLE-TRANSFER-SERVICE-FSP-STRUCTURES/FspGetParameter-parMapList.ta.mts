/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_mapList
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { MapList, _decode_MapList, _encode_MapList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MapList.ta.mjs";



/**
 * @summary FspGetParameter_parMapList
 * @description
 * 
 * map-list: the MAPs this service instance may use. When MAPs are unused, the
 * value is null. Service management sets it.
 * 
 * Annex A2.5: `mapsNotUsed` is null; `mapsUsed` is 1 to 64 MAP identifiers in
 * ascending order, each from 0 to 63.
 * 
 * CCSDS 912.3-B-3, table 3-11, section 3.1.9, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parMapList ::= SEQUENCE
 *    {  parameterName     ParameterName (mapList)
 *    ,  mapList           MapList
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parMapList {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `mapList`, selecting map-list in table 3-11. CCSDS 912.3-B-3,
     * section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `mapList`.
     * @description
     * Permitted MAP identifiers, or null when MAPs are unused. A used list
     * holds 1 to 64 identifiers in ascending order, each from 0 to 63. CCSDS
     * 912.3-B-3, table 3-11 and annex A2.5.
     * @public
     * @readonly
     */
    readonly mapList: MapList;

    constructor (
        parameterName: ParameterName,
        mapList: MapList
    ) {
        if (parameterName !== ParameterName_mapList) {
            throw new ASN1Error("FspGetParameter_parMapList.parameterName violates ParameterName (mapList)");
        }
        this.parameterName = parameterName;
        this.mapList = mapList;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parMapList
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parMapList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parMapList`.
     * @returns {FspGetParameter_parMapList}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parMapList)]: (FspGetParameter_parMapList)[_K] }): FspGetParameter_parMapList {
        return new FspGetParameter_parMapList(_o.parameterName, _o.mapList);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parMapList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parMapList: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("mapList", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parMapList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parMapList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parMapList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parMapList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parMapList: $.ASN1Decoder<FspGetParameter_parMapList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parMapList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parMapList (el: _Element): FspGetParameter_parMapList {
    if (!_cached_decoder_for_FspGetParameter_parMapList) { _cached_decoder_for_FspGetParameter_parMapList = function (el: _Element): FspGetParameter_parMapList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parMapList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "mapList";
    let parameterName!: ParameterName;
    let mapList!: MapList;
    parameterName = _decode_ParameterName(sequence[0]);
    mapList = _decode_MapList(sequence[1]);
    return new FspGetParameter_parMapList(
        parameterName,
        mapList,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parMapList(el);
}

let _cached_encoder_for_FspGetParameter_parMapList: $.ASN1Encoder<FspGetParameter_parMapList> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parMapList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parMapList, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parMapList (value: FspGetParameter_parMapList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parMapList) { _cached_encoder_for_FspGetParameter_parMapList = function (value: FspGetParameter_parMapList, _elGetter: $.ASN1Encoder<FspGetParameter_parMapList>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_MapList(value.mapList, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parMapList(value, elGetter);
}


/* eslint-enable */

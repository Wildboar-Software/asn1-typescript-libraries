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
import { MidCallInfoType, _decode_MidCallInfoType, _encode_MidCallInfoType } from "../IN-CS2-datatypes/MidCallInfoType.ta.mjs";
// export { MidCallInfoType, _decode_MidCallInfoType, _encode_MidCallInfoType } from "../IN-CS2-datatypes/MidCallInfoType.ta.mjs";
import { MidCallControlInfo_Item_midCallReportType, _enum_for_MidCallControlInfo_Item_midCallReportType, MidCallControlInfo_Item_midCallReportType_inMonitoringState /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_MidCallControlInfo_Item_midCallReportType, _encode_MidCallControlInfo_Item_midCallReportType } from "../IN-CS2-datatypes/MidCallControlInfo-Item-midCallReportType.ta.mjs";
// export { MidCallControlInfo_Item_midCallReportType, _enum_for_MidCallControlInfo_Item_midCallReportType, MidCallControlInfo_Item_midCallReportType_inMonitoringState /* IMPORTED_LONG_ENUMERATION_ITEM */, inMonitoringState /* IMPORTED_SHORT_ENUMERATION_ITEM */, MidCallControlInfo_Item_midCallReportType_inAnyState /* IMPORTED_LONG_ENUMERATION_ITEM */, inAnyState /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MidCallControlInfo_Item_midCallReportType, _encode_MidCallControlInfo_Item_midCallReportType } from "../IN-CS2-datatypes/MidCallControlInfo-Item-midCallReportType.ta.mjs";


/**
 * @summary MidCallControlInfo_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo-Item ::= SEQUENCE {
 *     midCallInfoType    [0]  MidCallInfoType{bound},
 *     midCallReportType  [1]  ENUMERATED {inMonitoringState(0), inAnyState(1)}
 *         DEFAULT inMonitoringState
 * }
 * ```
 * 
 * @class
 */
export
class MidCallControlInfo_Item {
    constructor (
        /**
         * @summary `midCallInfoType`.
         * @public
         * @readonly
         */
        readonly midCallInfoType: MidCallInfoType,
        /**
         * @summary `midCallReportType`.
         * @public
         * @readonly
         */
        readonly midCallReportType: OPTIONAL<MidCallControlInfo_Item_midCallReportType>
    ) {}

    /**
     * @summary Restructures an object into a MidCallControlInfo_Item
     * @description
     * 
     * This takes an `object` and converts it to a `MidCallControlInfo_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MidCallControlInfo_Item`.
     * @returns {MidCallControlInfo_Item}
     */
    public static _from_object (_o: { [_K in keyof (MidCallControlInfo_Item)]: (MidCallControlInfo_Item)[_K] }): MidCallControlInfo_Item {
        return new MidCallControlInfo_Item(_o.midCallInfoType, _o.midCallReportType);
    }

    /**
     * @summary Getter that returns the default value for `midCallReportType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_midCallReportType () { return MidCallControlInfo_Item_midCallReportType_inMonitoringState; }        /**
         * @summary The enum used as the type of the component `midCallReportType`
         * @public
         * @static
         */

    public static _enum_for_midCallReportType = _enum_for_MidCallControlInfo_Item_midCallReportType;
}

/**
 * @summary The Leading Root Component Types of MidCallControlInfo_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MidCallControlInfo_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("midCallInfoType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("midCallReportType", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MidCallControlInfo_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MidCallControlInfo_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MidCallControlInfo_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MidCallControlInfo_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MidCallControlInfo_Item: $.ASN1Decoder<MidCallControlInfo_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MidCallControlInfo_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MidCallControlInfo_Item (el: _Element): MidCallControlInfo_Item {
    if (!_cached_decoder_for_MidCallControlInfo_Item) { _cached_decoder_for_MidCallControlInfo_Item = function (el: _Element): MidCallControlInfo_Item {
    let midCallInfoType!: MidCallInfoType;
    let midCallReportType: OPTIONAL<MidCallControlInfo_Item_midCallReportType> = MidCallControlInfo_Item._default_value_for_midCallReportType;
    const callbacks: $.DecodingMap = {
        "midCallInfoType": (_el: _Element): void => { midCallInfoType = $._decode_implicit<MidCallInfoType>(() => _decode_MidCallInfoType)(_el); },
        "midCallReportType": (_el: _Element): void => { midCallReportType = $._decode_implicit<MidCallControlInfo_Item_midCallReportType>(() => _decode_MidCallControlInfo_Item_midCallReportType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MidCallControlInfo_Item,
        _extension_additions_list_spec_for_MidCallControlInfo_Item,
        _root_component_type_list_2_spec_for_MidCallControlInfo_Item,
        undefined,
    );
    return new MidCallControlInfo_Item(
        midCallInfoType,
        midCallReportType
    );
}; }
    return _cached_decoder_for_MidCallControlInfo_Item(el);
}

let _cached_encoder_for_MidCallControlInfo_Item: $.ASN1Encoder<MidCallControlInfo_Item> | null = null;

/**
 * @summary Encodes a(n) MidCallControlInfo_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MidCallControlInfo_Item, encoded as an ASN.1 Element.
 */
export
function _encode_MidCallControlInfo_Item (value: MidCallControlInfo_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MidCallControlInfo_Item) { _cached_encoder_for_MidCallControlInfo_Item = function (value: MidCallControlInfo_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MidCallInfoType, $.BER)(value.midCallInfoType, $.BER),
            /* IF_DEFAULT */ (value.midCallReportType === undefined || $.deepEq(value.midCallReportType, MidCallControlInfo_Item._default_value_for_midCallReportType) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MidCallControlInfo_Item_midCallReportType, $.BER)(value.midCallReportType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MidCallControlInfo_Item(value, elGetter);
}


/* eslint-enable */

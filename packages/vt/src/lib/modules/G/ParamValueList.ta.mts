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
import { ParamValueList_deliveryControl, _decode_ParamValueList_deliveryControl, _encode_ParamValueList_deliveryControl } from "../G/ParamValueList-deliveryControl.ta.mjs";
import { type Values as CDS_Values, _decode_Values as CDS__decode_Values, _encode_Values as CDS__encode_Values } from "../CDS/Values.ta.mjs";
import { type Values as CSS_Values, _decode_Values as CSS__decode_Values, _encode_Values as CSS__encode_Values } from "../CSS/Values.ta.mjs";
import { type Values as DEV_Values, _decode_Values as DEV__decode_Values, _encode_Values as DEV__encode_Values } from "../DEV/Values.ta.mjs";
// export { ParamValueList_deliveryControl, ParamValueList_deliveryControl_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, ParamValueList_deliveryControl_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, ParamValueList_deliveryControl_quarantine /* IMPORTED_LONG_NAMED_INTEGER */, quarantine /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ParamValueList_deliveryControl, _encode_ParamValueList_deliveryControl } from "../G/ParamValueList-deliveryControl.ta.mjs";


/**
 * @summary ParamValueList
 * @description
 *
 * MIN ACCEPT payload (and profile-arg values): selected CDS/CSS/DEV
 * parameters and one delivery-control INTEGER. ISO/IEC 9041-1:1997
 * §6.13, §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParamValueList ::= SEQUENCE {
 *     displayObjects  [0] IMPLICIT CDS.Values OPTIONAL,
 *     controlObjects  [1] IMPLICIT CSS.Values OPTIONAL,
 *     deviceObjects   [2] IMPLICIT DEV.Values OPTIONAL,
 *     deliveryControl [3] IMPLICIT INTEGER {
 *         none       (0), -- value 1 for a bit implies offer,
 *         simple     (1), -- value 0 implies no offer.
 *         quarantine (2)
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParamValueList {
    constructor (
        /**
         * @summary `displayObjects`.
         * @description
         * Selected CDS display-object values. ISO/IEC 9041-1:1997
         * §6.13.2, §12.2.
         * @public
         * @readonly
         */
        readonly displayObjects: OPTIONAL<CDS_Values>,
        /**
         * @summary `controlObjects`.
         * @description
         * Selected CSS control-object values. ISO/IEC 9041-1:1997
         * §6.13.2, §12.2.
         * @public
         * @readonly
         */
        readonly controlObjects: OPTIONAL<CSS_Values>,
        /**
         * @summary `deviceObjects`.
         * @description
         * Selected DEV device-object values. ISO/IEC 9041-1:1997
         * §6.13.2, §12.2.
         * @public
         * @readonly
         */
        readonly deviceObjects: OPTIONAL<DEV_Values>,
        /**
         * @summary `deliveryControl`.
         * @description
         * Selected delivery-control: none / simple / quarantine. Applies
         * only to DO updates and COs with CO-priority `"normal"`.
         * ISO/IEC 9040:1997 §24, table 15.
         * @public
         * @readonly
         */
        readonly deliveryControl: OPTIONAL<ParamValueList_deliveryControl>
    ) {}

    /**
     * @summary Restructures an object into a ParamValueList
     * @description
     * 
     * This takes an `object` and converts it to a `ParamValueList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParamValueList`.
     * @returns {ParamValueList}
     */
    public static _from_object (_o: { [_K in keyof (ParamValueList)]: (ParamValueList)[_K] }): ParamValueList {
        return new ParamValueList(_o.displayObjects, _o.controlObjects, _o.deviceObjects, _o.deliveryControl);
    }


}

/**
 * @summary The Leading Root Component Types of ParamValueList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParamValueList: $.ComponentSpec[] = [
    new $.ComponentSpec("displayObjects", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("controlObjects", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deviceObjects", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("deliveryControl", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ParamValueList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParamValueList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParamValueList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParamValueList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParamValueList: $.ASN1Decoder<ParamValueList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParamValueList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParamValueList (el: _Element): ParamValueList {
    if (!_cached_decoder_for_ParamValueList) { _cached_decoder_for_ParamValueList = function (el: _Element): ParamValueList {
    let displayObjects: OPTIONAL<CDS_Values>;
    let controlObjects: OPTIONAL<CSS_Values>;
    let deviceObjects: OPTIONAL<DEV_Values>;
    let deliveryControl: OPTIONAL<ParamValueList_deliveryControl>;
    const callbacks: $.DecodingMap = {
        "displayObjects": (_el: _Element): void => { displayObjects = $._decode_implicit<CDS_Values>(() => CDS__decode_Values)(_el); },
        "controlObjects": (_el: _Element): void => { controlObjects = $._decode_implicit<CSS_Values>(() => CSS__decode_Values)(_el); },
        "deviceObjects": (_el: _Element): void => { deviceObjects = $._decode_implicit<DEV_Values>(() => DEV__decode_Values)(_el); },
        "deliveryControl": (_el: _Element): void => { deliveryControl = $._decode_implicit<ParamValueList_deliveryControl>(() => _decode_ParamValueList_deliveryControl)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParamValueList,
        _extension_additions_list_spec_for_ParamValueList,
        _root_component_type_list_2_spec_for_ParamValueList,
        undefined,
    );
    return new ParamValueList(
        displayObjects,
        controlObjects,
        deviceObjects,
        deliveryControl
    );
}; }
    return _cached_decoder_for_ParamValueList(el);
}

let _cached_encoder_for_ParamValueList: $.ASN1Encoder<ParamValueList> | null = null;

/**
 * @summary Encodes a(n) ParamValueList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParamValueList, encoded as an ASN.1 Element.
 */
export
function _encode_ParamValueList (value: ParamValueList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParamValueList) { _cached_encoder_for_ParamValueList = function (value: ParamValueList): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.displayObjects === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => CDS__encode_Values, $.BER)(value.displayObjects, $.BER)),
            /* IF_ABSENT  */ ((value.controlObjects === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => CSS__encode_Values, $.BER)(value.controlObjects, $.BER)),
            /* IF_ABSENT  */ ((value.deviceObjects === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => DEV__encode_Values, $.BER)(value.deviceObjects, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryControl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ParamValueList_deliveryControl, $.BER)(value.deliveryControl, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParamValueList(value, elGetter);
}


/* eslint-enable */

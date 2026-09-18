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
import { ParamOfferList_deliveryControl, _decode_ParamOfferList_deliveryControl, _encode_ParamOfferList_deliveryControl } from "../G/ParamOfferList-deliveryControl.ta.mjs";
import { type Offer as CDS_Offer, _decode_Offer as CDS__decode_Offer, _encode_Offer as CDS__encode_Offer } from "../CDS/Offer.ta.mjs";
import { type Offer as CSS_Offer, _decode_Offer as CSS__decode_Offer, _encode_Offer as CSS__encode_Offer } from "../CSS/Offer.ta.mjs";
import { type Offer as DEV_Offer, _decode_Offer as DEV__decode_Offer, _encode_Offer as DEV__encode_Offer } from "../DEV/Offer.ta.mjs";
// export { ParamOfferList_deliveryControl, ParamOfferList_deliveryControl_none /* IMPORTED_LONG_NAMED_BIT */, none /* IMPORTED_SHORT_NAMED_BIT */, ParamOfferList_deliveryControl_simple /* IMPORTED_LONG_NAMED_BIT */, simple /* IMPORTED_SHORT_NAMED_BIT */, ParamOfferList_deliveryControl_quarantine /* IMPORTED_LONG_NAMED_BIT */, quarantine /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParamOfferList_deliveryControl, _encode_ParamOfferList_deliveryControl } from "../G/ParamOfferList-deliveryControl.ta.mjs";


/**
 * @summary ParamOfferList
 * @description
 *
 * MIN OFFER payload: offered CDS/CSS/DEV parameters and
 * delivery-control. ISO/IEC 9041-1:1997 §6.17, §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParamOfferList ::= SEQUENCE {
 *     displayObjects  [0] IMPLICIT CDS.Offer OPTIONAL,
 *     controlObjects  [1] IMPLICIT CSS.Offer OPTIONAL,
 *     deviceObjects   [2] IMPLICIT DEV.Offer OPTIONAL,
 *     deliveryControl [3] IMPLICIT BIT STRING {
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
class ParamOfferList {
    constructor (
        /**
         * @summary `displayObjects`.
         * @description
         * Offered CDS display-object parameters. ISO/IEC 9041-1:1997
         * §6.17.2, §12.2.
         * @public
         * @readonly
         */
        readonly displayObjects: OPTIONAL<CDS_Offer>,
        /**
         * @summary `controlObjects`.
         * @description
         * Offered CSS control-object parameters. ISO/IEC 9041-1:1997
         * §6.17.2, §12.2.
         * @public
         * @readonly
         */
        readonly controlObjects: OPTIONAL<CSS_Offer>,
        /**
         * @summary `deviceObjects`.
         * @description
         * Offered DEV device-object parameters. ISO/IEC 9041-1:1997
         * §6.17.2, §12.2.
         * @public
         * @readonly
         */
        readonly deviceObjects: OPTIONAL<DEV_Offer>,
        /**
         * @summary `deliveryControl`.
         * @description
         * Offered delivery-control values; bit=1 means offered. Applies
         * only to DO updates and COs with CO-priority `"normal"`.
         * ISO/IEC 9040:1997 §24, table 15.
         * @public
         * @readonly
         */
        readonly deliveryControl: OPTIONAL<ParamOfferList_deliveryControl>
    ) {}

    /**
     * @summary Restructures an object into a ParamOfferList
     * @description
     * 
     * This takes an `object` and converts it to a `ParamOfferList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParamOfferList`.
     * @returns {ParamOfferList}
     */
    public static _from_object (_o: { [_K in keyof (ParamOfferList)]: (ParamOfferList)[_K] }): ParamOfferList {
        return new ParamOfferList(_o.displayObjects, _o.controlObjects, _o.deviceObjects, _o.deliveryControl);
    }


}

/**
 * @summary The Leading Root Component Types of ParamOfferList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParamOfferList: $.ComponentSpec[] = [
    new $.ComponentSpec("displayObjects", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("controlObjects", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deviceObjects", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("deliveryControl", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ParamOfferList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParamOfferList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParamOfferList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParamOfferList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParamOfferList: $.ASN1Decoder<ParamOfferList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParamOfferList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParamOfferList (el: _Element): ParamOfferList {
    if (!_cached_decoder_for_ParamOfferList) { _cached_decoder_for_ParamOfferList = function (el: _Element): ParamOfferList {
    let displayObjects: OPTIONAL<CDS_Offer>;
    let controlObjects: OPTIONAL<CSS_Offer>;
    let deviceObjects: OPTIONAL<DEV_Offer>;
    let deliveryControl: OPTIONAL<ParamOfferList_deliveryControl>;
    const callbacks: $.DecodingMap = {
        "displayObjects": (_el: _Element): void => { displayObjects = $._decode_implicit<CDS_Offer>(() => CDS__decode_Offer)(_el); },
        "controlObjects": (_el: _Element): void => { controlObjects = $._decode_implicit<CSS_Offer>(() => CSS__decode_Offer)(_el); },
        "deviceObjects": (_el: _Element): void => { deviceObjects = $._decode_implicit<DEV_Offer>(() => DEV__decode_Offer)(_el); },
        "deliveryControl": (_el: _Element): void => { deliveryControl = $._decode_implicit<ParamOfferList_deliveryControl>(() => _decode_ParamOfferList_deliveryControl)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParamOfferList,
        _extension_additions_list_spec_for_ParamOfferList,
        _root_component_type_list_2_spec_for_ParamOfferList,
        undefined,
    );
    return new ParamOfferList(
        displayObjects,
        controlObjects,
        deviceObjects,
        deliveryControl
    );
}; }
    return _cached_decoder_for_ParamOfferList(el);
}

let _cached_encoder_for_ParamOfferList: $.ASN1Encoder<ParamOfferList> | null = null;

/**
 * @summary Encodes a(n) ParamOfferList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParamOfferList, encoded as an ASN.1 Element.
 */
export
function _encode_ParamOfferList (value: ParamOfferList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParamOfferList) { _cached_encoder_for_ParamOfferList = function (value: ParamOfferList): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.displayObjects === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => CDS__encode_Offer, $.BER)(value.displayObjects, $.BER)),
            /* IF_ABSENT  */ ((value.controlObjects === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => CSS__encode_Offer, $.BER)(value.controlObjects, $.BER)),
            /* IF_ABSENT  */ ((value.deviceObjects === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => DEV__encode_Offer, $.BER)(value.deviceObjects, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryControl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ParamOfferList_deliveryControl, $.BER)(value.deliveryControl, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParamOfferList(value, elGetter);
}


/* eslint-enable */

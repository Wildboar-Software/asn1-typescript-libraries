/* eslint-disable */
import {
    OPTIONAL,
    NULL,
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
import { type Identifier as CDS_Identifier, _decode_Identifier as CDS__decode_Identifier, _encode_Identifier as CDS__encode_Identifier } from "../CDS/Identifier.ta.mjs";
import { type Identifier as CSS_Identifier, _decode_Identifier as CSS__decode_Identifier, _encode_Identifier as CSS__encode_Identifier } from "../CSS/Identifier.ta.mjs";
import { type Identifier as DEV_Identifier, _decode_Identifier as DEV__decode_Identifier, _encode_Identifier as DEV__encode_Identifier } from "../DEV/Identifier.ta.mjs";



/**
 * @summary ParamIdentList
 * @description
 *
 * MIN INVITE/REJECT payload: names of VTE-parameters (CDS/CSS/DEV,
 * delivery-control) for which values are requested or rejected.
 * ISO/IEC 9041-1:1997 §6.15, §6.16, §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParamIdentList ::= SEQUENCE {
 *     displayObjects   [0] IMPLICIT CDS.Identifier OPTIONAL,
 *     controlObjects   [1] IMPLICIT CSS.Identifier OPTIONAL,
 *     deviceObjects    [2] IMPLICIT DEV.Identifier OPTIONAL,
 *     deliveryControl  [3] IMPLICIT NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParamIdentList {
    constructor (
        /**
         * @summary `displayObjects`.
         * @description
         * CDS display-object identifiers to invite or reject. ISO/IEC
         * 9041-1:1997 §6.15.2, §12.2.
         * @public
         * @readonly
         */
        readonly displayObjects: OPTIONAL<CDS_Identifier>,
        /**
         * @summary `controlObjects`.
         * @description
         * CSS control-object identifiers to invite or reject. ISO/IEC
         * 9041-1:1997 §6.15.2, §12.2.
         * @public
         * @readonly
         */
        readonly controlObjects: OPTIONAL<CSS_Identifier>,
        /**
         * @summary `deviceObjects`.
         * @description
         * DEV device-object identifiers to invite or reject. ISO/IEC
         * 9041-1:1997 §6.15.2, §12.2.
         * @public
         * @readonly
         */
        readonly deviceObjects: OPTIONAL<DEV_Identifier>,
        /**
         * @summary `deliveryControl`.
         * @description
         * Present to invite or reject the delivery-control VTE-parameter.
         * ISO/IEC 9040:1997 §24; ISO/IEC 9041-1:1997 §12.2.
         * @public
         * @readonly
         */
        readonly deliveryControl: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a ParamIdentList
     * @description
     * 
     * This takes an `object` and converts it to a `ParamIdentList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParamIdentList`.
     * @returns {ParamIdentList}
     */
    public static _from_object (_o: { [_K in keyof (ParamIdentList)]: (ParamIdentList)[_K] }): ParamIdentList {
        return new ParamIdentList(_o.displayObjects, _o.controlObjects, _o.deviceObjects, _o.deliveryControl);
    }


}

/**
 * @summary The Leading Root Component Types of ParamIdentList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParamIdentList: $.ComponentSpec[] = [
    new $.ComponentSpec("displayObjects", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("controlObjects", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deviceObjects", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("deliveryControl", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ParamIdentList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParamIdentList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParamIdentList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParamIdentList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParamIdentList: $.ASN1Decoder<ParamIdentList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParamIdentList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParamIdentList (el: _Element): ParamIdentList {
    if (!_cached_decoder_for_ParamIdentList) { _cached_decoder_for_ParamIdentList = function (el: _Element): ParamIdentList {
    let displayObjects: OPTIONAL<CDS_Identifier>;
    let controlObjects: OPTIONAL<CSS_Identifier>;
    let deviceObjects: OPTIONAL<DEV_Identifier>;
    let deliveryControl: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "displayObjects": (_el: _Element): void => { displayObjects = $._decode_implicit<CDS_Identifier>(() => CDS__decode_Identifier)(_el); },
        "controlObjects": (_el: _Element): void => { controlObjects = $._decode_implicit<CSS_Identifier>(() => CSS__decode_Identifier)(_el); },
        "deviceObjects": (_el: _Element): void => { deviceObjects = $._decode_implicit<DEV_Identifier>(() => DEV__decode_Identifier)(_el); },
        "deliveryControl": (_el: _Element): void => { deliveryControl = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParamIdentList,
        _extension_additions_list_spec_for_ParamIdentList,
        _root_component_type_list_2_spec_for_ParamIdentList,
        undefined,
    );
    return new ParamIdentList(
        displayObjects,
        controlObjects,
        deviceObjects,
        deliveryControl
    );
}; }
    return _cached_decoder_for_ParamIdentList(el);
}

let _cached_encoder_for_ParamIdentList: $.ASN1Encoder<ParamIdentList> | null = null;

/**
 * @summary Encodes a(n) ParamIdentList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParamIdentList, encoded as an ASN.1 Element.
 */
export
function _encode_ParamIdentList (value: ParamIdentList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParamIdentList) { _cached_encoder_for_ParamIdentList = function (value: ParamIdentList): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.displayObjects === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => CDS__encode_Identifier, $.BER)(value.displayObjects, $.BER)),
            /* IF_ABSENT  */ ((value.controlObjects === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => CSS__encode_Identifier, $.BER)(value.controlObjects, $.BER)),
            /* IF_ABSENT  */ ((value.deviceObjects === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => DEV__encode_Identifier, $.BER)(value.deviceObjects, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryControl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.deliveryControl, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParamIdentList(value, elGetter);
}


/* eslint-enable */

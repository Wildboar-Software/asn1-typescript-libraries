/* eslint-disable */
import {
    GraphicString,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SDP_Media_Components, _decode_SDP_Media_Components, _encode_SDP_Media_Components } from "../MMTelChargingDataTypes/SDP-Media-Components.ta.mjs";
import { SDP_Type, _decode_SDP_Type, _encode_SDP_Type, _enum_for_SDP_Type } from "../MMTelChargingDataTypes/SDP-Type.ta.mjs";


/**
 * @summary List_Of_Early_SDP_Media_Components
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * List-Of-Early-SDP-Media-Components ::= SEQUENCE {
 *    sDP-Offer-Timestamp       [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    sDP-Answer-Timestamp      [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    sDP-Media-Components      [2] IMPLICIT SEQUENCE  OF
 *       SDP-Media-Components OPTIONAL,
 *    mediaInitiatorFlag        [3] IMPLICIT NULL OPTIONAL,
 *    sDP-Session-Description   [4] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    sDP-Type                  [5] IMPLICIT SDP-Type OPTIONAL}
 * ```
 * 
 * @class
 */
export
class List_Of_Early_SDP_Media_Components {
    /**
     * @summary `sDP_Offer_Timestamp`.
     * @public
     * @readonly
     */
    readonly sDP_Offer_Timestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sDP_Answer_Timestamp`.
     * @public
     * @readonly
     */
    readonly sDP_Answer_Timestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sDP_Media_Components`.
     * @public
     * @readonly
     */
    readonly sDP_Media_Components: OPTIONAL<SDP_Media_Components[]>;
    /**
     * @summary `mediaInitiatorFlag`.
     * @public
     * @readonly
     */
    readonly mediaInitiatorFlag: OPTIONAL<NULL>;
    /**
     * @summary `sDP_Session_Description`.
     * @public
     * @readonly
     */
    readonly sDP_Session_Description: OPTIONAL<GraphicString[]>;
    /**
     * @summary `sDP_Type`.
     * @public
     * @readonly
     */
    readonly sDP_Type: OPTIONAL<SDP_Type>;

    constructor (
        sDP_Offer_Timestamp: OPTIONAL<OCTET_STRING>,
        sDP_Answer_Timestamp: OPTIONAL<OCTET_STRING>,
        sDP_Media_Components: OPTIONAL<SDP_Media_Components[]>,
        mediaInitiatorFlag: OPTIONAL<NULL>,
        sDP_Session_Description: OPTIONAL<GraphicString[]>,
        sDP_Type: OPTIONAL<SDP_Type>
    ) {
        this.sDP_Offer_Timestamp = sDP_Offer_Timestamp;
        this.sDP_Answer_Timestamp = sDP_Answer_Timestamp;
        this.sDP_Media_Components = sDP_Media_Components;
        this.mediaInitiatorFlag = mediaInitiatorFlag;
        this.sDP_Session_Description = sDP_Session_Description;
        this.sDP_Type = sDP_Type;
    
        if (this.sDP_Offer_Timestamp !== undefined && (this.sDP_Offer_Timestamp.length !== 9)) {
            throw new ASN1SizeError("List_Of_Early_SDP_Media_Components.sDP_Offer_Timestamp violates SIZE constraint");
        }
        if (this.sDP_Answer_Timestamp !== undefined && (this.sDP_Answer_Timestamp.length !== 9)) {
            throw new ASN1SizeError("List_Of_Early_SDP_Media_Components.sDP_Answer_Timestamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a List_Of_Early_SDP_Media_Components
     * @description
     * 
     * This takes an `object` and converts it to a `List_Of_Early_SDP_Media_Components`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `List_Of_Early_SDP_Media_Components`.
     * @returns {List_Of_Early_SDP_Media_Components}
     */
    public static _from_object (_o: { [_K in keyof (List_Of_Early_SDP_Media_Components)]: (List_Of_Early_SDP_Media_Components)[_K] }): List_Of_Early_SDP_Media_Components {
        return new List_Of_Early_SDP_Media_Components(_o.sDP_Offer_Timestamp, _o.sDP_Answer_Timestamp, _o.sDP_Media_Components, _o.mediaInitiatorFlag, _o.sDP_Session_Description, _o.sDP_Type);
    }

        /**
         * @summary The enum used as the type of the component `sDP_Type`
         * @public
         * @static
         */

    public static _enum_for_sDP_Type = _enum_for_SDP_Type;
}

/**
 * @summary The Leading Root Component Types of List_Of_Early_SDP_Media_Components
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_List_Of_Early_SDP_Media_Components: $.ComponentSpec[] = [
    new $.ComponentSpec("sDP-Offer-Timestamp", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sDP-Answer-Timestamp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sDP-Media-Components", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mediaInitiatorFlag", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sDP-Session-Description", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sDP-Type", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of List_Of_Early_SDP_Media_Components
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_List_Of_Early_SDP_Media_Components: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of List_Of_Early_SDP_Media_Components
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_List_Of_Early_SDP_Media_Components: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_List_Of_Early_SDP_Media_Components: $.ASN1Decoder<List_Of_Early_SDP_Media_Components> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) List_Of_Early_SDP_Media_Components
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_List_Of_Early_SDP_Media_Components (el: _Element): List_Of_Early_SDP_Media_Components {
    if (!_cached_decoder_for_List_Of_Early_SDP_Media_Components) { _cached_decoder_for_List_Of_Early_SDP_Media_Components = function (el: _Element): List_Of_Early_SDP_Media_Components {
    let sDP_Offer_Timestamp: OPTIONAL<OCTET_STRING>;
    let sDP_Answer_Timestamp: OPTIONAL<OCTET_STRING>;
    let sDP_Media_Components: OPTIONAL<SDP_Media_Components[]>;
    let mediaInitiatorFlag: OPTIONAL<NULL>;
    let sDP_Session_Description: OPTIONAL<GraphicString[]>;
    let sDP_Type: OPTIONAL<SDP_Type>;
    const callbacks: $.DecodingMap = {
        "sDP-Offer-Timestamp": (_el: _Element): void => { sDP_Offer_Timestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sDP-Answer-Timestamp": (_el: _Element): void => { sDP_Answer_Timestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sDP-Media-Components": (_el: _Element): void => { sDP_Media_Components = $._decode_implicit<SDP_Media_Components[]>(() => $._decodeSequenceOf<SDP_Media_Components>(() => _decode_SDP_Media_Components))(_el); },
        "mediaInitiatorFlag": (_el: _Element): void => { mediaInitiatorFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sDP-Session-Description": (_el: _Element): void => { sDP_Session_Description = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "sDP-Type": (_el: _Element): void => { sDP_Type = $._decode_implicit<SDP_Type>(() => _decode_SDP_Type)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_List_Of_Early_SDP_Media_Components,
        _extension_additions_list_spec_for_List_Of_Early_SDP_Media_Components,
        _root_component_type_list_2_spec_for_List_Of_Early_SDP_Media_Components,
        undefined,
    );
    return new List_Of_Early_SDP_Media_Components(
        sDP_Offer_Timestamp,
        sDP_Answer_Timestamp,
        sDP_Media_Components,
        mediaInitiatorFlag,
        sDP_Session_Description,
        sDP_Type
    );
}; }
    return _cached_decoder_for_List_Of_Early_SDP_Media_Components(el);
}

let _cached_encoder_for_List_Of_Early_SDP_Media_Components: $.ASN1Encoder<List_Of_Early_SDP_Media_Components> | null = null;

/**
 * @summary Encodes a(n) List_Of_Early_SDP_Media_Components into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The List_Of_Early_SDP_Media_Components, encoded as an ASN.1 Element.
 */
export
function _encode_List_Of_Early_SDP_Media_Components (value: List_Of_Early_SDP_Media_Components, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_List_Of_Early_SDP_Media_Components) { _cached_encoder_for_List_Of_Early_SDP_Media_Components = function (value: List_Of_Early_SDP_Media_Components, _elGetter: $.ASN1Encoder<List_Of_Early_SDP_Media_Components>): _Element {
    const _components: _Element[] = [];
    if (value.sDP_Offer_Timestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sDP_Offer_Timestamp, $.BER));
    }
    if (value.sDP_Answer_Timestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sDP_Answer_Timestamp, $.BER));
    }
    if (value.sDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SDP_Media_Components>(() => _encode_SDP_Media_Components, $.BER), $.BER)(value.sDP_Media_Components, $.BER));
    }
    if (value.mediaInitiatorFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.mediaInitiatorFlag, $.BER));
    }
    if (value.sDP_Session_Description !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.sDP_Session_Description, $.BER));
    }
    if (value.sDP_Type !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SDP_Type, $.BER)(value.sDP_Type, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_List_Of_Early_SDP_Media_Components(value, elGetter);
}


/* eslint-enable */

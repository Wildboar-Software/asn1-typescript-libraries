/* eslint-disable */
import {
    type BOOLEAN,
    GraphicString,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessCorrelationID, _decode_AccessCorrelationID, _encode_AccessCorrelationID } from "./AccessCorrelationID.ta.mjs";


/**
 * @summary SDP_Media_Components
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDP-Media-Components ::= SEQUENCE {
 *    sDP-Media-Name                 [0] IMPLICIT GraphicString OPTIONAL,
 *    sDP-Media-Descriptions         [1] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    accessCorrelationID            AccessCorrelationID OPTIONAL,
 *    localGWInsertedIndication      [5] IMPLICIT BOOLEAN OPTIONAL,
 *    iPRealmDefaultIndication       [6] IMPLICIT BOOLEAN OPTIONAL,
 *    transcoderInsertedIndication   [7] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SDP_Media_Components {
    /**
     * @summary `sDP_Media_Name`.
     * @public
     * @readonly
     */
    readonly sDP_Media_Name: OPTIONAL<GraphicString>;
    /**
     * @summary `sDP_Media_Descriptions`.
     * @public
     * @readonly
     */
    readonly sDP_Media_Descriptions: OPTIONAL<GraphicString[]>;
    /**
     * @summary `accessCorrelationID`.
     * @public
     * @readonly
     */
    readonly accessCorrelationID: OPTIONAL<AccessCorrelationID>;
    /**
     * @summary `localGWInsertedIndication`.
     * @public
     * @readonly
     */
    readonly localGWInsertedIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iPRealmDefaultIndication`.
     * @public
     * @readonly
     */
    readonly iPRealmDefaultIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary `transcoderInsertedIndication`.
     * @public
     * @readonly
     */
    readonly transcoderInsertedIndication: OPTIONAL<BOOLEAN>;

    constructor (
        sDP_Media_Name?: OPTIONAL<GraphicString>,
        sDP_Media_Descriptions?: OPTIONAL<GraphicString[]>,
        accessCorrelationID?: OPTIONAL<AccessCorrelationID>,
        localGWInsertedIndication?: OPTIONAL<BOOLEAN>,
        iPRealmDefaultIndication?: OPTIONAL<BOOLEAN>,
        transcoderInsertedIndication?: OPTIONAL<BOOLEAN>
    ) {
        this.sDP_Media_Name = sDP_Media_Name;
        this.sDP_Media_Descriptions = sDP_Media_Descriptions;
        this.accessCorrelationID = accessCorrelationID;
        this.localGWInsertedIndication = localGWInsertedIndication;
        this.iPRealmDefaultIndication = iPRealmDefaultIndication;
        this.transcoderInsertedIndication = transcoderInsertedIndication;
    }

    /**
     * @summary Restructures an object into a SDP_Media_Components
     * @description
     * 
     * This takes an `object` and converts it to a `SDP_Media_Components`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SDP_Media_Components`.
     * @returns {SDP_Media_Components}
     */
    public static _from_object (_o: { [_K in keyof (SDP_Media_Components)]: (SDP_Media_Components)[_K] }): SDP_Media_Components {
        return new SDP_Media_Components(_o.sDP_Media_Name, _o.sDP_Media_Descriptions, _o.accessCorrelationID, _o.localGWInsertedIndication, _o.iPRealmDefaultIndication, _o.transcoderInsertedIndication);
    }


}

/**
 * @summary The Leading Root Component Types of SDP_Media_Components
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SDP_Media_Components: $.ComponentSpec[] = [
    new $.ComponentSpec("sDP-Media-Name", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sDP-Media-Descriptions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessCorrelationID", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 4))),
    new $.ComponentSpec("localGWInsertedIndication", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("iPRealmDefaultIndication", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("transcoderInsertedIndication", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of SDP_Media_Components
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SDP_Media_Components: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SDP_Media_Components
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SDP_Media_Components: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SDP_Media_Components: $.ASN1Decoder<SDP_Media_Components> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SDP_Media_Components
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SDP_Media_Components (el: _Element): SDP_Media_Components {
    if (!_cached_decoder_for_SDP_Media_Components) { _cached_decoder_for_SDP_Media_Components = function (el: _Element): SDP_Media_Components {
    let sDP_Media_Name: OPTIONAL<GraphicString>;
    let sDP_Media_Descriptions: OPTIONAL<GraphicString[]>;
    let accessCorrelationID: OPTIONAL<AccessCorrelationID>;
    let localGWInsertedIndication: OPTIONAL<BOOLEAN>;
    let iPRealmDefaultIndication: OPTIONAL<BOOLEAN>;
    let transcoderInsertedIndication: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "sDP-Media-Name": (_el: _Element): void => { sDP_Media_Name = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "sDP-Media-Descriptions": (_el: _Element): void => { sDP_Media_Descriptions = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "accessCorrelationID": (_el: _Element): void => { accessCorrelationID = _decode_AccessCorrelationID(_el); },
        "localGWInsertedIndication": (_el: _Element): void => { localGWInsertedIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iPRealmDefaultIndication": (_el: _Element): void => { iPRealmDefaultIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "transcoderInsertedIndication": (_el: _Element): void => { transcoderInsertedIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SDP_Media_Components,
        _extension_additions_list_spec_for_SDP_Media_Components,
        _root_component_type_list_2_spec_for_SDP_Media_Components,
        undefined,
    );
    return new SDP_Media_Components(
        sDP_Media_Name,
        sDP_Media_Descriptions,
        accessCorrelationID,
        localGWInsertedIndication,
        iPRealmDefaultIndication,
        transcoderInsertedIndication
    );
}; }
    return _cached_decoder_for_SDP_Media_Components(el);
}

let _cached_encoder_for_SDP_Media_Components: $.ASN1Encoder<SDP_Media_Components> | null = null;

/**
 * @summary Encodes a(n) SDP_Media_Components into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDP_Media_Components, encoded as an ASN.1 Element.
 */
export
function _encode_SDP_Media_Components (value: SDP_Media_Components, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SDP_Media_Components) { _cached_encoder_for_SDP_Media_Components = function (value: SDP_Media_Components, _elGetter: $.ASN1Encoder<SDP_Media_Components>): _Element {
    const _components: _Element[] = [];
    if (value.sDP_Media_Name !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeGraphicString, $.BER)(value.sDP_Media_Name, $.BER));
    }
    if (value.sDP_Media_Descriptions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.sDP_Media_Descriptions, $.BER));
    }
    if (value.accessCorrelationID !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AccessCorrelationID(value.accessCorrelationID, $.BER));
    }
    if (value.localGWInsertedIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.localGWInsertedIndication, $.BER));
    }
    if (value.iPRealmDefaultIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.iPRealmDefaultIndication, $.BER));
    }
    if (value.transcoderInsertedIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.transcoderInsertedIndication, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SDP_Media_Components(value, elGetter);
}


/* eslint-enable */

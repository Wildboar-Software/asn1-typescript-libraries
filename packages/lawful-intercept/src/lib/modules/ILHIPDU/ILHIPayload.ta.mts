/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncapsulationPayload, _decode_EncapsulationPayload, _encode_EncapsulationPayload } from "../ILHIPDU/EncapsulationPayload.ta.mjs";
// export { EncapsulationPayload, _decode_EncapsulationPayload, _encode_EncapsulationPayload } from "../ILHIPDU/EncapsulationPayload.ta.mjs";
import { MappingInfo, _decode_MappingInfo, _encode_MappingInfo } from "../ILHIPDU/MappingInfo.ta.mjs";
// export { MappingInfo, _decode_MappingInfo, _encode_MappingInfo } from "../ILHIPDU/MappingInfo.ta.mjs";


/**
 * @summary ILHIPayload
 * @description
 *
 * Additional information the responding LEMF places in a TS 102 232 family
 * PS-PDU on the Inter LEMF Handover Interface. The encapsulation function
 * creates it from the interoperability function and, when mapping is used,
 * from the mapping function. Whether the optional parts are sent is a
 * bilateral agreement. The mapping function itself is optional, and the
 * responding LEMF decides whether it is used.
 *
 * The PS-PDU header carries the Inter LEMF LIID (clause 6.2.1). That LIID is
 * not a component of this type. Clause 6 states the header, integrity,
 * encryption, and transport obligations for the surrounding PS-PDU.
 *
 * This module is identified by `{iLHIDomainId ilhiPdu(0) version2(2)}`.
 * Annex B of V1.1.1 assigns `version1(1)` to the same name.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), clause 5, clause 6, clause 7.1,
 * clause 7.2, annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ILHIPayload ::= SEQUENCE
 * {
 *     iLHIObjId                [0] OBJECT IDENTIFIER,
 *     resPayload                [1] EncapsulationPayload,
 *     mappingInfo                [2] MappingInfo OPTIONAL,
 *     -- output from the MapF
 *     originalPayload            [3] EncapsulationPayload OPTIONAL,
 *     ...    
 * }
 * ```
 * 
 * @class
 */
export
class ILHIPayload {
    /**
     * @summary `iLHIObjId`.
     * @description
     *
     * Object identifier of the ILHI PDU definition in this payload. For this
     * module that value is `iLHIObjId`, arc `version2(2)`. Annex B of V1.1.1
     * assigns `version1(1)` under the same name.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), annex B.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly iLHIObjId: OBJECT_IDENTIFIER;
    /**
     * @summary `resPayload`.
     * @description
     *
     * Mandatory output of the interoperability function.
     *
     * When the CSP delivered a PS-PDU that already follows a TS 102 232 part
     * in the table below, this is that received PS-PDU. Otherwise the
     * interoperability function generates a PS-PDU in the part the responding
     * LEMF chooses from that table. Data held locally in ETSI TS 133 108 form
     * are formatted as ETSI TS 102 232-7.
     *
     * The responding LEMF leads, and the implementation options profiled by
     * ETSI TS 102 232 parts 2 to 7 are agreed bilaterally by the responding
     * and requesting LEAs. Clause 8.1 states how the octet string and its
     * object identifier are set.
     *
     * | Service | Applicable specification |
     * | --- | --- |
     * | messaging | ETSI TS 102 232-2 |
     * | fixed or wireless IP access | ETSI TS 102 232-3 |
     * | Layer 2 | ETSI TS 102 232-4 |
     * | fixed VoIP telephony | ETSI TS 102 232-5, -6 and/or -7 |
     * | PSTN/ISDN | ETSI TS 102 232-6 |
     * | IMS (for example VoLTE, VoWiFi, RCSe) | ETSI TS 102 232-5, -6 and/or -7 |
     * | CS mobile telephony | ETSI TS 102 232-6 or -7 |
     * | mobile or wireless IP access (3GPP services) | ETSI TS 102 232-7 |
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.4, clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly resPayload: EncapsulationPayload;
    /**
     * @summary `mappingInfo`.
     * @description
     *
     * Output of the mapping function, passed to the encapsulation function.
     * Absent when mapping is not used. The responding LEMF decides whether
     * and how mapping is applied. Mapping a local cell identity to
     * geographical coordinates is a bilateral agreement and does not change
     * this workflow.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), clause 3.1, clause 5, clause 7.3.1.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly mappingInfo: OPTIONAL<MappingInfo>;
    /**
     * @summary `originalPayload`.
     * @description
     *
     * Unmodified received data. Present when the interoperability function
     * had to generate `resPayload` because the CSP delivery was not already a
     * TS 102 232 PS-PDU, for example a national email interception that does
     * not use ETSI TS 102 232-2. Clause 7.4 requires this field to be absent
     * when that received PS-PDU is forwarded unchanged as `resPayload`.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), clause 3.1, clause 7.4.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly originalPayload: OPTIONAL<EncapsulationPayload>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this decoder did not recognize. V1.1.1 marks the
     * type extensible and does not say how a receiver treats unrecognized
     * additions.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), annex B.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iLHIObjId: OBJECT_IDENTIFIER,
        resPayload: EncapsulationPayload,
        mappingInfo: OPTIONAL<MappingInfo>,
        originalPayload: OPTIONAL<EncapsulationPayload>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iLHIObjId = iLHIObjId;
        this.resPayload = resPayload;
        this.mappingInfo = mappingInfo;
        this.originalPayload = originalPayload;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ILHIPayload
     * @description
     * 
     * This takes an `object` and converts it to a `ILHIPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ILHIPayload`.
     * @returns {ILHIPayload}
     */
    public static _from_object (_o: { [_K in keyof (ILHIPayload)]: (ILHIPayload)[_K] }): ILHIPayload {
        return new ILHIPayload(_o.iLHIObjId, _o.resPayload, _o.mappingInfo, _o.originalPayload, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ILHIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ILHIPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("iLHIObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("resPayload", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mappingInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originalPayload", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ILHIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ILHIPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ILHIPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ILHIPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ILHIPayload: $.ASN1Decoder<ILHIPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ILHIPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ILHIPayload (el: _Element): ILHIPayload {
    if (!_cached_decoder_for_ILHIPayload) { _cached_decoder_for_ILHIPayload = function (el: _Element): ILHIPayload {
    let iLHIObjId!: OBJECT_IDENTIFIER;
    let resPayload!: EncapsulationPayload;
    let mappingInfo: OPTIONAL<MappingInfo>;
    let originalPayload: OPTIONAL<EncapsulationPayload>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iLHIObjId": (_el: _Element): void => { iLHIObjId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "resPayload": (_el: _Element): void => { resPayload = $._decode_implicit<EncapsulationPayload>(() => _decode_EncapsulationPayload)(_el); },
        "mappingInfo": (_el: _Element): void => { mappingInfo = $._decode_implicit<MappingInfo>(() => _decode_MappingInfo)(_el); },
        "originalPayload": (_el: _Element): void => { originalPayload = $._decode_implicit<EncapsulationPayload>(() => _decode_EncapsulationPayload)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ILHIPayload,
        _extension_additions_list_spec_for_ILHIPayload,
        _root_component_type_list_2_spec_for_ILHIPayload,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ILHIPayload(
        iLHIObjId,
        resPayload,
        mappingInfo,
        originalPayload,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ILHIPayload(el);
}

let _cached_encoder_for_ILHIPayload: $.ASN1Encoder<ILHIPayload> | null = null;

/**
 * @summary Encodes a(n) ILHIPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ILHIPayload, encoded as an ASN.1 Element.
 */
export
function _encode_ILHIPayload (value: ILHIPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ILHIPayload) { _cached_encoder_for_ILHIPayload = function (value: ILHIPayload, elGetter: $.ASN1Encoder<ILHIPayload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.iLHIObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EncapsulationPayload, $.BER)(value.resPayload, $.BER);
    if (value.mappingInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MappingInfo, $.BER)(value.mappingInfo, $.BER);
    }
    if (value.originalPayload !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_EncapsulationPayload, $.BER)(value.originalPayload, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ILHIPayload(value, elGetter);
}


/* eslint-enable */

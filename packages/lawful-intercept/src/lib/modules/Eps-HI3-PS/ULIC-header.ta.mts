/* eslint-disable */
import {
    type INTEGER,
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { type EPSCorrelationNumber, _decode_EPSCorrelationNumber, _encode_EPSCorrelationNumber } from "../EpsHI2Operations/EPSCorrelationNumber.ta.mjs";
// export { EPSCorrelationNumber, _decode_EPSCorrelationNumber, _encode_EPSCorrelationNumber } from "../EpsHI2Operations/EPSCorrelationNumber.ta.mjs";
import { type TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { TPDU_direction, _decode_TPDU_direction, _encode_TPDU_direction, _enum_for_TPDU_direction } from "../Eps-HI3-PS/TPDU-direction.ta.mjs";
// export { TPDU_direction, _enum_for_TPDU_direction, TPDU_direction_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_to_target /* IMPORTED_LONG_ENUMERATION_ITEM */, to_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TPDU_direction, _encode_TPDU_direction } from "../Eps-HI3-PS/TPDU-direction.ta.mjs";
import { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Eps-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
// export { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Eps-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
import { type ICE_type, _decode_ICE_type, _encode_ICE_type, _enum_for_ICE_type } from "../Eps-HI3-PS/ICE-type.ta.mjs";
// export { ICE_type, _enum_for_ICE_type, ICE_type_sgsn /* IMPORTED_LONG_ENUMERATION_ITEM */, sgsn /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_ggsn /* IMPORTED_LONG_ENUMERATION_ITEM */, ggsn /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_s_GW /* IMPORTED_LONG_ENUMERATION_ITEM */, s_GW /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_pDN_GW /* IMPORTED_LONG_ENUMERATION_ITEM */, pDN_GW /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_colocated_SAE_GWs /* IMPORTED_LONG_ENUMERATION_ITEM */, colocated_SAE_GWs /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_ePDG /* IMPORTED_LONG_ENUMERATION_ITEM */, ePDG /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ICE_type, _encode_ICE_type } from "../Eps-HI3-PS/ICE-type.ta.mjs";


/**
 * @summary ULIC_header
 * @description
 * 
 * EPS ULIC header. Same attribute family as UMTS version 1, without the ASN.1
 * version component, and with EPS ICE values (S-GW, PDN-GW, colocated SAE
 * gateways, ePDG, and also SGSN and GGSN). IPsec is recommended. The LEMF
 * stores packets with the sequence numbers and correlates CC to IRI with the
 * correlation number (annex C.1.5).
 * 
 * 3GPP TS 33.108, annex C.1.3 and annex B.10.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ULIC-header ::= SEQUENCE
 * {
 *     hi3DomainId                [0]    OBJECT IDENTIFIER,  -- 3GPP HI3 Domain
 *     lIID                    [2] LawfulInterceptionIdentifier OPTIONAL,
 *     correlation-Number        [3]    EPSCorrelationNumber,
 *     timeStamp                [4]    TimeStamp OPTIONAL,
 *     sequence-number            [5]    INTEGER (0..65535),
 *     t-PDU-direction            [6] TPDU-direction,
 *     ...,
 *     national-HI3-ASN1parameters        [7] National-HI3-ASN1parameters OPTIONAL,
 *     --  encoded per national requirements
 *     ice-type                [8] ICE-type OPTIONAL
 *         -- The ICE-type indicates the applicable Intercepting Control Element(see ref [19]) in which
 *         -- the T-PDU is intercepted.
 * }
 * ```
 * 
 * @class
 */
export
class ULIC_header {
    /**
     * @summary `hi3DomainId`.
     * @description
     * 
     * 3GPP HI3 domain identifier in this header (`hi3eps` `r17` `version-0`
     * under `threeGPPSUBDomainId`). 3GPP TS 33.108, annex C.1.3 and annex B.10.
     * @public
     * @readonly
     */
    readonly hi3DomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lIID`.
     * @description
     * 
     * Lawful interception identifier. Sending is application dependent and
     * follows national requirements. 3GPP TS 33.108, annex C.1.3.
     * @public
     * @readonly
     */
    readonly lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    /**
     * @summary `correlation_Number`.
     * @description
     * 
     * Unique per EPS bearer or tunnel. Correlates CC with IRI, IRI records of
     * that bearer or tunnel, and LALS reports with the triggering IRI. GTP and
     * PMIP can yield different values for the same communication. Across a
     * Gn/Gp handover between E-UTRAN and 2G/3G, keep the same value for that
     * IRI transaction. 3GPP TS 33.108, clause 10.1.3 and annex C.1.3.
     * @public
     * @readonly
     */
    readonly correlation_Number: EPSCorrelationNumber;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Sending is application dependent and follows national requirements. 3GPP
     * TS 33.108, annex C.1.3.
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<TimeStamp>;
    /**
     * @summary `sequence_number`.
     * @description
     * 
     * Increasing sequence number for tunneled T-PDUs. Handling is a national
     * requirement. If handover changes the DF3, sequencing may restart.
     * 3GPP TS 33.108, annex C.1.3.
     * @public
     * @readonly
     */
    readonly sequence_number: INTEGER;
    /**
     * @summary `t_PDU_direction`.
     * @description
     * 
     * Direction of the T-PDU, from the target or to the target. 3GPP TS 33.108,
     * annex C.1.3.
     * @public
     * @readonly
     */
    readonly t_PDU_direction: TPDU_direction;
    /**
     * @summary `national_HI3_ASN1parameters`.
     * @description
     * 
     * Encoded per national requirements. Annex C.1.3 lists this on the
     * version-1 header. The module places it after the extension marker. 3GPP
     * TS 33.108, annex C.1.3.
     * @public
     * @readonly
     */
    readonly national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    /**
     * @summary `ice_type`.
     * @description
     * 
     * Node that intercepted the T-PDU. Needed only when several core-network
     * nodes share one delivery or mediation function. Annex C.1.3 lists this on
     * version 1; the module places it after the extension marker. EPS values
     * include S-GW, PDN-GW, colocated SAE gateways, and ePDG. 3GPP TS 33.108,
     * annex C.1.3 and annex B.10.
     * @public
     * @readonly
     */
    readonly ice_type: OPTIONAL<ICE_type>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions not named in this module.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi3DomainId: OBJECT_IDENTIFIER,
        lIID: OPTIONAL<LawfulInterceptionIdentifier>,
        correlation_Number: EPSCorrelationNumber,
        timeStamp: OPTIONAL<TimeStamp>,
        sequence_number: INTEGER,
        t_PDU_direction: TPDU_direction,
        national_HI3_ASN1parameters?: OPTIONAL<National_HI3_ASN1parameters>,
        ice_type?: OPTIONAL<ICE_type>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi3DomainId = hi3DomainId;
        this.lIID = lIID;
        this.correlation_Number = correlation_Number;
        this.timeStamp = timeStamp;
        this.sequence_number = sequence_number;
        this.t_PDU_direction = t_PDU_direction;
        this.national_HI3_ASN1parameters = national_HI3_ASN1parameters;
        this.ice_type = ice_type;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ULIC_header
     * @description
     * 
     * This takes an `object` and converts it to a `ULIC_header`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ULIC_header`.
     * @returns {ULIC_header}
     */
    public static _from_object (_o: { [_K in keyof (ULIC_header)]: (ULIC_header)[_K] }): ULIC_header {
        return new ULIC_header(_o.hi3DomainId, _o.lIID, _o.correlation_Number, _o.timeStamp, _o.sequence_number, _o.t_PDU_direction, _o.national_HI3_ASN1parameters, _o.ice_type, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `t_PDU_direction`
         * @public
         * @static
         */

    public static _enum_for_t_PDU_direction: typeof _enum_for_TPDU_direction = _enum_for_TPDU_direction;        /**
         * @summary The enum used as the type of the component `ice_type`
         * @public
         * @static
         */

    public static _enum_for_ice_type: typeof _enum_for_ICE_type = _enum_for_ICE_type;
}

/**
 * @summary The Leading Root Component Types of ULIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ULIC_header: $.ComponentSpec[] = [
    new $.ComponentSpec("hi3DomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lIID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("correlation-Number", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sequence-number", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("t-PDU-direction", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ULIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ULIC_header: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ULIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ULIC_header: $.ComponentSpec[] = [
    new $.ComponentSpec("national-HI3-ASN1parameters", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ice-type", true, $.hasTag(_TagClass.context, 8))
];

let _cached_decoder_for_ULIC_header: $.ASN1Decoder<ULIC_header> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ULIC_header
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ULIC_header (el: _Element): ULIC_header {
    if (!_cached_decoder_for_ULIC_header) { _cached_decoder_for_ULIC_header = function (el: _Element): ULIC_header {
    let hi3DomainId!: OBJECT_IDENTIFIER;
    let lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    let correlation_Number!: EPSCorrelationNumber;
    let timeStamp: OPTIONAL<TimeStamp>;
    let sequence_number!: INTEGER;
    let t_PDU_direction!: TPDU_direction;
    let national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    let ice_type: OPTIONAL<ICE_type>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi3DomainId": (_el: _Element): void => { hi3DomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lIID": (_el: _Element): void => { lIID = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "correlation-Number": (_el: _Element): void => { correlation_Number = $._decode_implicit<EPSCorrelationNumber>(() => _decode_EPSCorrelationNumber)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "sequence-number": (_el: _Element): void => {
            sequence_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof sequence_number === "bigint" ? sequence_number : BigInt(sequence_number);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("ULIC_header.sequence_number violates INTEGER range");
            }
        },
        "t-PDU-direction": (_el: _Element): void => { t_PDU_direction = $._decode_implicit<TPDU_direction>(() => _decode_TPDU_direction)(_el); },
        "national-HI3-ASN1parameters": (_el: _Element): void => { national_HI3_ASN1parameters = $._decode_implicit<National_HI3_ASN1parameters>(() => _decode_National_HI3_ASN1parameters)(_el); },
        "ice-type": (_el: _Element): void => { ice_type = $._decode_implicit<ICE_type>(() => _decode_ICE_type)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ULIC_header,
        _extension_additions_list_spec_for_ULIC_header,
        _root_component_type_list_2_spec_for_ULIC_header,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ULIC_header(
        hi3DomainId,
        lIID,
        correlation_Number,
        timeStamp,
        sequence_number,
        t_PDU_direction,
        national_HI3_ASN1parameters,
        ice_type,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ULIC_header(el);
}

let _cached_encoder_for_ULIC_header: $.ASN1Encoder<ULIC_header> | null = null;

/**
 * @summary Encodes a(n) ULIC_header into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ULIC_header, encoded as an ASN.1 Element.
 */
export
function _encode_ULIC_header (value: ULIC_header, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ULIC_header) { _cached_encoder_for_ULIC_header = function (value: ULIC_header, elGetter: $.ASN1Encoder<ULIC_header>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi3DomainId, $.BER);
    if (value.lIID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lIID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSCorrelationNumber, $.BER)(value.correlation_Number, $.BER);
    if (value.timeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.sequence_number, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_TPDU_direction, $.BER)(value.t_PDU_direction, $.BER);
    if (value.national_HI3_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_National_HI3_ASN1parameters, $.BER)(value.national_HI3_ASN1parameters, $.BER);
    }
    if (value.ice_type !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ICE_type, $.BER)(value.ice_type, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ULIC_header(value, elGetter);
}


/* eslint-enable */

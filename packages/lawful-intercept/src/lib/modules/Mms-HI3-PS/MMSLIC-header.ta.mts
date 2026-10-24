/* eslint-disable */
import {
    type INTEGER,
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { MMSCorrelationNumber, _decode_MMSCorrelationNumber, _encode_MMSCorrelationNumber } from "../MmsHI2Operations/MMSCorrelationNumber.ta.mjs";
// export { MMSCorrelationNumber, _decode_MMSCorrelationNumber, _encode_MMSCorrelationNumber } from "../MmsHI2Operations/MMSCorrelationNumber.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { TPDU_direction, _decode_TPDU_direction, _encode_TPDU_direction, _enum_for_TPDU_direction } from "../Mms-HI3-PS/TPDU-direction.ta.mjs";
// export { TPDU_direction, _enum_for_TPDU_direction, TPDU_direction_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_to_target /* IMPORTED_LONG_ENUMERATION_ITEM */, to_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TPDU_direction, _encode_TPDU_direction } from "../Mms-HI3-PS/TPDU-direction.ta.mjs";
import { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Mms-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
// export { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Mms-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
import { ICE_type, _decode_ICE_type, _encode_ICE_type, _enum_for_ICE_type } from "../Mms-HI3-PS/ICE-type.ta.mjs";
// export { ICE_type, _enum_for_ICE_type, ICE_type_mMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, mMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_mMSProxyRelay /* IMPORTED_LONG_ENUMERATION_ITEM */, mMSProxyRelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ICE_type, _encode_ICE_type } from "../Mms-HI3-PS/ICE-type.ta.mjs";


/**
 * @summary MMSLIC_header
 * @description
 * 
 * Header for one MMS CC PDU. Table 15.3.7.1 requires the event time, network
 * identifier, LIID, correlation number, MMS version and transaction identifier
 * when available, and the MMS content. The MMS Proxy-Relay supplies correlation
 * numbers and target identities to DF3 (clause 15.3.2.1).
 * 
 * 3GPP TS 33.108, clause 15.3.7 and annex B.16.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSLIC-header ::= SEQUENCE
 * {
 *     hi3MmsDomainId                [0]    OBJECT IDENTIFIER,  -- 3GPP HI3 Domain
 *     lIID                        [1] LawfulInterceptionIdentifier OPTIONAL,
 *     mMSCorrelationNNumber        [2]    MMSCorrelationNumber,
 *     timeStamp                    [3]    TimeStamp,
 *     t-PDU-direction                [4] TPDU-direction,
 *     mMSVersion                    [5]    INTEGER,
 *     transactionID                [6]    UTF8String,
 *     national-HI3-ASN1parameters    [7] National-HI3-ASN1parameters OPTIONAL,
 *     --  encoded per national requirements
 *     ice-type                    [8] ICE-type OPTIONAL,
 *     -- The ICE-type indicates the applicable Intercepting Control Element(see ref [19]) in which
 *     -- the T-PDU is intercepted.
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MMSLIC_header {
    /**
     * @summary `hi3MmsDomainId`.
     * @description
     * 
     * 3GPP HI3 domain identifier in this header (`hi3mms` under
     * `threeGPPSUBDomainId`). 3GPP TS 33.108, annex B.16.
     * @public
     * @readonly
     */
    readonly hi3MmsDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lIID`.
     * @description
     * 
     * Lawful interception identifier for the target, specific to MMS
     * interception per national regulation. Table 15.3.7.1 requires it. 3GPP TS
     * 33.108, clause 15.3.2.2.
     * @public
     * @readonly
     */
    readonly lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    /**
     * @summary `mMSCorrelationNNumber`.
     * @description
     * 
     * Correlates this CC with the IRI of the same MMS. For a given target,
     * unique across MMS involving that target. 3GPP TS 33.108, clause 15.3.2.3
     * and table 15.3.7.1.
     * @public
     * @readonly
     */
    readonly mMSCorrelationNNumber: MMSCorrelationNumber;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time the MMS event was detected. Table 15.3.7.1 requires the
     * event date and event time. 3GPP TS 33.108, clause 15.3.7.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `t_PDU_direction`.
     * @description
     * 
     * Direction of the MMS T-PDU. The module defines from the target, to the
     * target, and unknown. Table 15.3.7.1 does not further specify them. 3GPP
     * TS 33.108, annex B.16.
     * @public
     * @readonly
     */
    readonly t_PDU_direction: TPDU_direction;
    /**
     * @summary `mMSVersion`.
     * @description
     * 
     * MMS version. Table 15.3.7.1 requires it when available. 3GPP TS 33.108,
     * clause 15.3.7.
     * @public
     * @readonly
     */
    readonly mMSVersion: INTEGER;
    /**
     * @summary `transactionID`.
     * @description
     * 
     * MMS transaction identifier. Table 15.3.7.1 requires it when available.
     * 3GPP TS 33.108, clause 15.3.7.
     * @public
     * @readonly
     */
    readonly transactionID: UTF8String;
    /**
     * @summary `national_HI3_ASN1parameters`.
     * @description
     * 
     * Encoded per national requirements. 3GPP TS 33.108, annex B.16.
     * @public
     * @readonly
     */
    readonly national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    /**
     * @summary `ice_type`.
     * @description
     * 
     * Intercepting control element in which the MMS content was intercepted.
     * 3GPP TS 33.108, annex B.16.
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
        hi3MmsDomainId: OBJECT_IDENTIFIER,
        lIID: OPTIONAL<LawfulInterceptionIdentifier>,
        mMSCorrelationNNumber: MMSCorrelationNumber,
        timeStamp: TimeStamp,
        t_PDU_direction: TPDU_direction,
        mMSVersion: INTEGER,
        transactionID: UTF8String,
        national_HI3_ASN1parameters?: OPTIONAL<National_HI3_ASN1parameters>,
        ice_type?: OPTIONAL<ICE_type>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi3MmsDomainId = hi3MmsDomainId;
        this.lIID = lIID;
        this.mMSCorrelationNNumber = mMSCorrelationNNumber;
        this.timeStamp = timeStamp;
        this.t_PDU_direction = t_PDU_direction;
        this.mMSVersion = mMSVersion;
        this.transactionID = transactionID;
        this.national_HI3_ASN1parameters = national_HI3_ASN1parameters;
        this.ice_type = ice_type;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSLIC_header
     * @description
     * 
     * This takes an `object` and converts it to a `MMSLIC_header`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSLIC_header`.
     * @returns {MMSLIC_header}
     */
    public static _from_object (_o: { [_K in keyof (MMSLIC_header)]: (MMSLIC_header)[_K] }): MMSLIC_header {
        return new MMSLIC_header(_o.hi3MmsDomainId, _o.lIID, _o.mMSCorrelationNNumber, _o.timeStamp, _o.t_PDU_direction, _o.mMSVersion, _o.transactionID, _o.national_HI3_ASN1parameters, _o.ice_type, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `t_PDU_direction`
         * @public
         * @static
         */

    public static _enum_for_t_PDU_direction = _enum_for_TPDU_direction;        /**
         * @summary The enum used as the type of the component `ice_type`
         * @public
         * @static
         */

    public static _enum_for_ice_type = _enum_for_ICE_type;
}

/**
 * @summary The Leading Root Component Types of MMSLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSLIC_header: $.ComponentSpec[] = [
    new $.ComponentSpec("hi3MmsDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lIID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mMSCorrelationNNumber", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("t-PDU-direction", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mMSVersion", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("national-HI3-ASN1parameters", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ice-type", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of MMSLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSLIC_header: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSLIC_header: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSLIC_header: $.ASN1Decoder<MMSLIC_header> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSLIC_header
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSLIC_header (el: _Element): MMSLIC_header {
    if (!_cached_decoder_for_MMSLIC_header) { _cached_decoder_for_MMSLIC_header = function (el: _Element): MMSLIC_header {
    let hi3MmsDomainId!: OBJECT_IDENTIFIER;
    let lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    let mMSCorrelationNNumber!: MMSCorrelationNumber;
    let timeStamp!: TimeStamp;
    let t_PDU_direction!: TPDU_direction;
    let mMSVersion!: INTEGER;
    let transactionID!: UTF8String;
    let national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    let ice_type: OPTIONAL<ICE_type>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi3MmsDomainId": (_el: _Element): void => { hi3MmsDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lIID": (_el: _Element): void => { lIID = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "mMSCorrelationNNumber": (_el: _Element): void => { mMSCorrelationNNumber = $._decode_implicit<MMSCorrelationNumber>(() => _decode_MMSCorrelationNumber)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "t-PDU-direction": (_el: _Element): void => { t_PDU_direction = $._decode_implicit<TPDU_direction>(() => _decode_TPDU_direction)(_el); },
        "mMSVersion": (_el: _Element): void => { mMSVersion = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "national-HI3-ASN1parameters": (_el: _Element): void => { national_HI3_ASN1parameters = $._decode_implicit<National_HI3_ASN1parameters>(() => _decode_National_HI3_ASN1parameters)(_el); },
        "ice-type": (_el: _Element): void => { ice_type = $._decode_implicit<ICE_type>(() => _decode_ICE_type)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSLIC_header,
        _extension_additions_list_spec_for_MMSLIC_header,
        _root_component_type_list_2_spec_for_MMSLIC_header,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMSLIC_header(
        hi3MmsDomainId,
        lIID,
        mMSCorrelationNNumber,
        timeStamp,
        t_PDU_direction,
        mMSVersion,
        transactionID,
        national_HI3_ASN1parameters,
        ice_type,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMSLIC_header(el);
}

let _cached_encoder_for_MMSLIC_header: $.ASN1Encoder<MMSLIC_header> | null = null;

/**
 * @summary Encodes a(n) MMSLIC_header into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSLIC_header, encoded as an ASN.1 Element.
 */
export
function _encode_MMSLIC_header (value: MMSLIC_header, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSLIC_header) { _cached_encoder_for_MMSLIC_header = function (value: MMSLIC_header, elGetter: $.ASN1Encoder<MMSLIC_header>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi3MmsDomainId, $.BER);
    if (value.lIID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lIID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSCorrelationNumber, $.BER)(value.mMSCorrelationNNumber, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TPDU_direction, $.BER)(value.t_PDU_direction, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.mMSVersion, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER);
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
    return _cached_encoder_for_MMSLIC_header(value, elGetter);
}


/* eslint-enable */

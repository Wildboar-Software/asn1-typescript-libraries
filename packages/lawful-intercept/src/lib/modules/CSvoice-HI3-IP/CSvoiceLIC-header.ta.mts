/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
// export { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { TPDU_direction, _decode_TPDU_direction, _encode_TPDU_direction, _enum_for_TPDU_direction } from "../VoIP-HI3-IMS/TPDU-direction.ta.mjs";
// export { TPDU_direction, _enum_for_TPDU_direction, TPDU_direction_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_to_target /* IMPORTED_LONG_ENUMERATION_ITEM */, to_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_combined /* IMPORTED_LONG_ENUMERATION_ITEM */, combined /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TPDU_direction, _encode_TPDU_direction } from "../VoIP-HI3-IMS/TPDU-direction.ta.mjs";
import { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Eps-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
// export { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Eps-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
import { Payload_description, _decode_Payload_description, _encode_Payload_description } from "../VoIP-HI3-IMS/Payload-description.ta.mjs";
// export { Payload_description, _decode_Payload_description, _encode_Payload_description } from "../VoIP-HI3-IMS/Payload-description.ta.mjs";


/**
 * @summary CSvoiceLIC_header
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSvoiceLIC-header ::= SEQUENCE
 * {
 *     hi3CSvoiceDomainId            [0]    OBJECT IDENTIFIER,  -- 3GPP IP-based delivery for CS HI3 Domain
 *     lIID                        [1] LawfulInterceptionIdentifier OPTIONAL,
 *     communicationIdentifier        [2]    CommunicationIdentifier,
 *         -- contents same as the contents of similar field sent in the linked IRI messages
 *     ccLID                        [3]    CC-Link-Identifier    OPTIONAL,
 *         -- Included only if the linked IRI messages have the similar field. When included,
 *         -- the content is same as the content of similar field sent in the linked IRI messages.
 *     timeStamp                    [4]    TimeStamp OPTIONAL,
 *     sequence-number                [5]    INTEGER (0..65535),
 *     t-PDU-direction                [6] TPDU-direction,
 *     national-HI3-ASN1parameters    [7] National-HI3-ASN1parameters OPTIONAL,
 *         --  encoded per national requirements
 *     payload-description            [8] Payload-description,
 *         -- used to provide the codec information of the CC (as RTP payload) delivered over HI3
 *      ...
 * }
 * ```
 * 
 * @class
 */
export
class CSvoiceLIC_header {
    /**
     * @summary `hi3CSvoiceDomainId`.
     * @public
     * @readonly
     */
    readonly hi3CSvoiceDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lIID`.
     * @public
     * @readonly
     */
    readonly lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    /**
     * @summary `communicationIdentifier`.
     * @public
     * @readonly
     */
    readonly communicationIdentifier: CommunicationIdentifier;
    /**
     * @summary `ccLID`.
     * @public
     * @readonly
     */
    readonly ccLID: OPTIONAL<CC_Link_Identifier>;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<TimeStamp>;
    /**
     * @summary `sequence_number`.
     * @public
     * @readonly
     */
    readonly sequence_number: INTEGER;
    /**
     * @summary `t_PDU_direction`.
     * @public
     * @readonly
     */
    readonly t_PDU_direction: TPDU_direction;
    /**
     * @summary `national_HI3_ASN1parameters`.
     * @public
     * @readonly
     */
    readonly national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    /**
     * @summary `payload_description`.
     * @public
     * @readonly
     */
    readonly payload_description: Payload_description;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi3CSvoiceDomainId: OBJECT_IDENTIFIER,
        lIID: OPTIONAL<LawfulInterceptionIdentifier>,
        communicationIdentifier: CommunicationIdentifier,
        ccLID: OPTIONAL<CC_Link_Identifier>,
        timeStamp: OPTIONAL<TimeStamp>,
        sequence_number: INTEGER,
        t_PDU_direction: TPDU_direction,
        national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>,
        payload_description: Payload_description,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi3CSvoiceDomainId = hi3CSvoiceDomainId;
        this.lIID = lIID;
        this.communicationIdentifier = communicationIdentifier;
        this.ccLID = ccLID;
        this.timeStamp = timeStamp;
        this.sequence_number = sequence_number;
        this.t_PDU_direction = t_PDU_direction;
        this.national_HI3_ASN1parameters = national_HI3_ASN1parameters;
        this.payload_description = payload_description;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CSvoiceLIC_header
     * @description
     * 
     * This takes an `object` and converts it to a `CSvoiceLIC_header`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CSvoiceLIC_header`.
     * @returns {CSvoiceLIC_header}
     */
    public static _from_object (_o: { [_K in keyof (CSvoiceLIC_header)]: (CSvoiceLIC_header)[_K] }): CSvoiceLIC_header {
        return new CSvoiceLIC_header(_o.hi3CSvoiceDomainId, _o.lIID, _o.communicationIdentifier, _o.ccLID, _o.timeStamp, _o.sequence_number, _o.t_PDU_direction, _o.national_HI3_ASN1parameters, _o.payload_description, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `t_PDU_direction`
         * @public
         * @static
         */

    public static _enum_for_t_PDU_direction = _enum_for_TPDU_direction;
}

/**
 * @summary The Leading Root Component Types of CSvoiceLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CSvoiceLIC_header: $.ComponentSpec[] = [
    new $.ComponentSpec("hi3CSvoiceDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lIID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("communicationIdentifier", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ccLID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sequence-number", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("t-PDU-direction", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("national-HI3-ASN1parameters", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("payload-description", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of CSvoiceLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CSvoiceLIC_header: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CSvoiceLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CSvoiceLIC_header: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CSvoiceLIC_header: $.ASN1Decoder<CSvoiceLIC_header> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSvoiceLIC_header
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSvoiceLIC_header (el: _Element): CSvoiceLIC_header {
    if (!_cached_decoder_for_CSvoiceLIC_header) { _cached_decoder_for_CSvoiceLIC_header = function (el: _Element): CSvoiceLIC_header {
    let hi3CSvoiceDomainId!: OBJECT_IDENTIFIER;
    let lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    let communicationIdentifier!: CommunicationIdentifier;
    let ccLID: OPTIONAL<CC_Link_Identifier>;
    let timeStamp: OPTIONAL<TimeStamp>;
    let sequence_number!: INTEGER;
    let t_PDU_direction!: TPDU_direction;
    let national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    let payload_description!: Payload_description;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi3CSvoiceDomainId": (_el: _Element): void => { hi3CSvoiceDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lIID": (_el: _Element): void => { lIID = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "ccLID": (_el: _Element): void => { ccLID = $._decode_implicit<CC_Link_Identifier>(() => _decode_CC_Link_Identifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "sequence-number": (_el: _Element): void => {
            sequence_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof sequence_number === "bigint" ? sequence_number : BigInt(sequence_number);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("CSvoiceLIC_header.sequence_number violates INTEGER range");
            }
        },
        "t-PDU-direction": (_el: _Element): void => { t_PDU_direction = $._decode_implicit<TPDU_direction>(() => _decode_TPDU_direction)(_el); },
        "national-HI3-ASN1parameters": (_el: _Element): void => { national_HI3_ASN1parameters = $._decode_implicit<National_HI3_ASN1parameters>(() => _decode_National_HI3_ASN1parameters)(_el); },
        "payload-description": (_el: _Element): void => { payload_description = $._decode_implicit<Payload_description>(() => _decode_Payload_description)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CSvoiceLIC_header,
        _extension_additions_list_spec_for_CSvoiceLIC_header,
        _root_component_type_list_2_spec_for_CSvoiceLIC_header,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CSvoiceLIC_header(
        hi3CSvoiceDomainId,
        lIID,
        communicationIdentifier,
        ccLID,
        timeStamp,
        sequence_number,
        t_PDU_direction,
        national_HI3_ASN1parameters,
        payload_description,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CSvoiceLIC_header(el);
}

let _cached_encoder_for_CSvoiceLIC_header: $.ASN1Encoder<CSvoiceLIC_header> | null = null;

/**
 * @summary Encodes a(n) CSvoiceLIC_header into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSvoiceLIC_header, encoded as an ASN.1 Element.
 */
export
function _encode_CSvoiceLIC_header (value: CSvoiceLIC_header, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSvoiceLIC_header) { _cached_encoder_for_CSvoiceLIC_header = function (value: CSvoiceLIC_header, elGetter: $.ASN1Encoder<CSvoiceLIC_header>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi3CSvoiceDomainId, $.BER);
    if (value.lIID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lIID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    if (value.ccLID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CC_Link_Identifier, $.BER)(value.ccLID, $.BER);
    }
    if (value.timeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.sequence_number, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_TPDU_direction, $.BER)(value.t_PDU_direction, $.BER);
    if (value.national_HI3_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_National_HI3_ASN1parameters, $.BER)(value.national_HI3_ASN1parameters, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_Payload_description, $.BER)(value.payload_description, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CSvoiceLIC_header(value, elGetter);
}


/* eslint-enable */

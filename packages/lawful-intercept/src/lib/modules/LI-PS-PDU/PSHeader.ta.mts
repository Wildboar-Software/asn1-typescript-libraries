/* eslint-disable */
import {
    GeneralizedTime,
    INTEGER,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../LI-PS-PDU/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../LI-PS-PDU/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../LI-PS-PDU/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../LI-PS-PDU/CommunicationIdentifier.ta.mjs";
import { MicroSecondTimeStamp, _decode_MicroSecondTimeStamp, _encode_MicroSecondTimeStamp } from "../LI-PS-PDU/MicroSecondTimeStamp.ta.mjs";
// export { MicroSecondTimeStamp, _decode_MicroSecondTimeStamp, _encode_MicroSecondTimeStamp } from "../LI-PS-PDU/MicroSecondTimeStamp.ta.mjs";
import { TimeStampQualifier, _decode_TimeStampQualifier, _encode_TimeStampQualifier, _enum_for_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";
// export { TimeStampQualifier, _enum_for_TimeStampQualifier, TimeStampQualifier_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfMediation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfMediation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfAggregation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfAggregation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TimeStampQualifier, _encode_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";


/**
 * @summary PSHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PSHeader ::= SEQUENCE
 * {
 *     li-psDomainId                   [0] OBJECT IDENTIFIER,
 *     lawfulInterceptionIdentifier    [1] LawfulInterceptionIdentifier,
 *         -- As of ASN.1 version 26 this parameter is included from ETSI TS 103 280 [44]
 *     authorizationCountryCode        [2] PrintableString (SIZE (2)) OPTIONAL,
 *         -- see clause 5.2.3
 *     communicationIdentifier         [3] CommunicationIdentifier,
 *     sequenceNumber                  [4] INTEGER (0..4294967295),
 *     timeStamp                       [5] GeneralizedTime OPTIONAL,
 *         -- see clause 5.2.6
 *     ...,
 *     interceptionPointID             [6] PrintableString (SIZE (1..8)) OPTIONAL,
 *         -- see clause 5.2.11
 *     microSecondTimeStamp            [7] MicroSecondTimeStamp OPTIONAL,
 *     timeStampQualifier              [8] TimeStampQualifier OPTIONAL,
 *     extendedInterceptionPointID     [9] OCTET STRING (SIZE (1..65535)) OPTIONAL,
 *         -- see clause 5.2.13
 *     networkFunctionIdentifier       [10] OCTET STRING (SIZE (1..65535)) OPTIONAL
 *         -- see clause 5.2.14
 * }
 * ```
 * 
 * @class
 */
export
class PSHeader {
    /**
     * @summary `li_psDomainId`.
     * @public
     * @readonly
     */
    readonly li_psDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `authorizationCountryCode`.
     * @public
     * @readonly
     */
    readonly authorizationCountryCode: OPTIONAL<PrintableString>;
    /**
     * @summary `communicationIdentifier`.
     * @public
     * @readonly
     */
    readonly communicationIdentifier: CommunicationIdentifier;
    /**
     * @summary `sequenceNumber`.
     * @public
     * @readonly
     */
    readonly sequenceNumber: INTEGER;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `interceptionPointID`.
     * @public
     * @readonly
     */
    readonly interceptionPointID: OPTIONAL<PrintableString>;
    /**
     * @summary `microSecondTimeStamp`.
     * @public
     * @readonly
     */
    readonly microSecondTimeStamp: OPTIONAL<MicroSecondTimeStamp>;
    /**
     * @summary `timeStampQualifier`.
     * @public
     * @readonly
     */
    readonly timeStampQualifier: OPTIONAL<TimeStampQualifier>;
    /**
     * @summary `extendedInterceptionPointID`.
     * @public
     * @readonly
     */
    readonly extendedInterceptionPointID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `networkFunctionIdentifier`.
     * @public
     * @readonly
     */
    readonly networkFunctionIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        li_psDomainId: OBJECT_IDENTIFIER,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        authorizationCountryCode: OPTIONAL<PrintableString>,
        communicationIdentifier: CommunicationIdentifier,
        sequenceNumber: INTEGER,
        timeStamp: OPTIONAL<GeneralizedTime>,
        interceptionPointID: OPTIONAL<PrintableString>,
        microSecondTimeStamp: OPTIONAL<MicroSecondTimeStamp>,
        timeStampQualifier: OPTIONAL<TimeStampQualifier>,
        extendedInterceptionPointID: OPTIONAL<OCTET_STRING>,
        networkFunctionIdentifier: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.li_psDomainId = li_psDomainId;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.authorizationCountryCode = authorizationCountryCode;
        this.communicationIdentifier = communicationIdentifier;
        this.sequenceNumber = sequenceNumber;
        this.timeStamp = timeStamp;
        this.interceptionPointID = interceptionPointID;
        this.microSecondTimeStamp = microSecondTimeStamp;
        this.timeStampQualifier = timeStampQualifier;
        this.extendedInterceptionPointID = extendedInterceptionPointID;
        this.networkFunctionIdentifier = networkFunctionIdentifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PSHeader
     * @description
     * 
     * This takes an `object` and converts it to a `PSHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PSHeader`.
     * @returns {PSHeader}
     */
    public static _from_object (_o: { [_K in keyof (PSHeader)]: (PSHeader)[_K] }): PSHeader {
        return new PSHeader(_o.li_psDomainId, _o.lawfulInterceptionIdentifier, _o.authorizationCountryCode, _o.communicationIdentifier, _o.sequenceNumber, _o.timeStamp, _o.interceptionPointID, _o.microSecondTimeStamp, _o.timeStampQualifier, _o.extendedInterceptionPointID, _o.networkFunctionIdentifier, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `timeStampQualifier`
         * @public
         * @static
         */

    public static _enum_for_timeStampQualifier = _enum_for_TimeStampQualifier;
}

/**
 * @summary The Leading Root Component Types of PSHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PSHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("li-psDomainId", false, $.hasTag(_TagClass.context, 0)),
    /* FIXME: lawfulInterceptionIdentifier COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("authorizationCountryCode", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("communicationIdentifier", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sequenceNumber", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of PSHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PSHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PSHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PSHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("interceptionPointID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("microSecondTimeStamp", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("timeStampQualifier", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("extendedInterceptionPointID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("networkFunctionIdentifier", true, $.hasTag(_TagClass.context, 10))
];

let _cached_decoder_for_PSHeader: $.ASN1Decoder<PSHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PSHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PSHeader (el: _Element): PSHeader {
    if (!_cached_decoder_for_PSHeader) { _cached_decoder_for_PSHeader = function (el: _Element): PSHeader {
    let li_psDomainId!: OBJECT_IDENTIFIER;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let authorizationCountryCode: OPTIONAL<PrintableString>;
    let communicationIdentifier!: CommunicationIdentifier;
    let sequenceNumber!: INTEGER;
    let timeStamp: OPTIONAL<GeneralizedTime>;
    let interceptionPointID: OPTIONAL<PrintableString>;
    let microSecondTimeStamp: OPTIONAL<MicroSecondTimeStamp>;
    let timeStampQualifier: OPTIONAL<TimeStampQualifier>;
    let extendedInterceptionPointID: OPTIONAL<OCTET_STRING>;
    let networkFunctionIdentifier: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "li-psDomainId": (_el: _Element): void => { li_psDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "authorizationCountryCode": (_el: _Element): void => { authorizationCountryCode = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "interceptionPointID": (_el: _Element): void => { interceptionPointID = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "microSecondTimeStamp": (_el: _Element): void => { microSecondTimeStamp = $._decode_implicit<MicroSecondTimeStamp>(() => _decode_MicroSecondTimeStamp)(_el); },
        "timeStampQualifier": (_el: _Element): void => { timeStampQualifier = $._decode_implicit<TimeStampQualifier>(() => _decode_TimeStampQualifier)(_el); },
        "extendedInterceptionPointID": (_el: _Element): void => { extendedInterceptionPointID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "networkFunctionIdentifier": (_el: _Element): void => { networkFunctionIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PSHeader,
        _extension_additions_list_spec_for_PSHeader,
        _root_component_type_list_2_spec_for_PSHeader,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PSHeader(
        li_psDomainId,
        lawfulInterceptionIdentifier,
        authorizationCountryCode,
        communicationIdentifier,
        sequenceNumber,
        timeStamp,
        interceptionPointID,
        microSecondTimeStamp,
        timeStampQualifier,
        extendedInterceptionPointID,
        networkFunctionIdentifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PSHeader(el);
}

let _cached_encoder_for_PSHeader: $.ASN1Encoder<PSHeader> | null = null;

/**
 * @summary Encodes a(n) PSHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSHeader, encoded as an ASN.1 Element.
 */
export
function _encode_PSHeader (value: PSHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PSHeader) { _cached_encoder_for_PSHeader = function (value: PSHeader, elGetter: $.ASN1Encoder<PSHeader>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.li_psDomainId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    if (value.authorizationCountryCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodePrintableString, $.BER)(value.authorizationCountryCode, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER);
    if (value.timeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeGeneralizedTime, $.BER)(value.timeStamp, $.BER);
    }
    if (value.interceptionPointID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodePrintableString, $.BER)(value.interceptionPointID, $.BER);
    }
    if (value.microSecondTimeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_MicroSecondTimeStamp, $.BER)(value.microSecondTimeStamp, $.BER);
    }
    if (value.timeStampQualifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_TimeStampQualifier, $.BER)(value.timeStampQualifier, $.BER);
    }
    if (value.extendedInterceptionPointID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.extendedInterceptionPointID, $.BER);
    }
    if (value.networkFunctionIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.networkFunctionIdentifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PSHeader(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { Content_Report_initiator, _decode_Content_Report_initiator, _encode_Content_Report_initiator, _enum_for_Content_Report_initiator } from "../HI3CircuitDataOperations/Content-Report-initiator.ta.mjs";
// export { Content_Report_initiator, _enum_for_Content_Report_initiator, Content_Report_initiator_originating_party /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, Content_Report_initiator_terminating_party /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, Content_Report_initiator_forwarded_to_party /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded_to_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, Content_Report_initiator_undefined_party /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Content_Report_initiator, _encode_Content_Report_initiator } from "../HI3CircuitDataOperations/Content-Report-initiator.ta.mjs";
import { Supplementary_Services, _decode_Supplementary_Services, _encode_Supplementary_Services } from "../HI2Operations/Supplementary-Services.ta.mjs";
// export { Supplementary_Services, _decode_Supplementary_Services, _encode_Supplementary_Services } from "../HI2Operations/Supplementary-Services.ta.mjs";
import { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../HI2Operations/SMS-report.ta.mjs";
// export { SMS_report, _decode_SMS_report, _encode_SMS_report } from "../HI2Operations/SMS-report.ta.mjs";


/**
 * @summary Content_Report
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Content-Report ::= SEQUENCE
 * {
 *     domainID                        [0] OBJECT IDENTIFIER (hi3CircuitLIOperationId) OPTIONAL,
 *         -- Once using FTP delivery mechanism
 *     lawfulInterceptionIdentifier    [6] LawfulInterceptionIdentifier OPTIONAL,
 *     communicationIdentifier            [1] CommunicationIdentifier,
 *         -- Used to uniquely identify an intercepted call: the same as used for the relevant IRI.
 *         -- Called "callIdentifier" in V1.1.1 of ES 201 671 [i.5]
 *     timeStamp                        [2] TimeStamp,
 *     initiator                        [3] ENUMERATED
 *     {
 *         originating-party(0),
 *         terminating-party(1),
 *         forwarded-to-party(2),
 *         undefined-party(3),
 *         ...
 *     } OPTIONAL,
 *     content                            [4] Supplementary-Services OPTIONAL,
 *         -- UUI are encoded in the format defined for the User-to-user information parameter
 *         -- of the ISUP protocol (see�EN 300 356 [5]). Only one UUI parameter is sent per message.
 *     sMS-report                        [5] SMS-report OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Content_Report {
    /**
     * @summary `domainID`.
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: OPTIONAL<LawfulInterceptionIdentifier>;
    /**
     * @summary `communicationIdentifier`.
     * @public
     * @readonly
     */
    readonly communicationIdentifier: CommunicationIdentifier;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `initiator`.
     * @public
     * @readonly
     */
    readonly initiator: OPTIONAL<Content_Report_initiator>;
    /**
     * @summary `content`.
     * @public
     * @readonly
     */
    readonly content: OPTIONAL<Supplementary_Services>;
    /**
     * @summary `sMS_report`.
     * @public
     * @readonly
     */
    readonly sMS_report: OPTIONAL<SMS_report>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        lawfulInterceptionIdentifier: OPTIONAL<LawfulInterceptionIdentifier>,
        communicationIdentifier: CommunicationIdentifier,
        timeStamp: TimeStamp,
        initiator: OPTIONAL<Content_Report_initiator>,
        content: OPTIONAL<Supplementary_Services>,
        sMS_report: OPTIONAL<SMS_report>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.communicationIdentifier = communicationIdentifier;
        this.timeStamp = timeStamp;
        this.initiator = initiator;
        this.content = content;
        this.sMS_report = sMS_report;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Content_Report
     * @description
     * 
     * This takes an `object` and converts it to a `Content_Report`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Content_Report`.
     * @returns {Content_Report}
     */
    public static _from_object (_o: { [_K in keyof (Content_Report)]: (Content_Report)[_K] }): Content_Report {
        return new Content_Report(_o.domainID, _o.lawfulInterceptionIdentifier, _o.communicationIdentifier, _o.timeStamp, _o.initiator, _o.content, _o.sMS_report, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_Content_Report_initiator;
}

/**
 * @summary The Leading Root Component Types of Content_Report
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Content_Report: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("communicationIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("initiator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("content", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sMS-report", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of Content_Report
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Content_Report: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Content_Report
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Content_Report: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Content_Report: $.ASN1Decoder<Content_Report> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Content_Report
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Content_Report (el: _Element): Content_Report {
    if (!_cached_decoder_for_Content_Report) { _cached_decoder_for_Content_Report = function (el: _Element): Content_Report {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let lawfulInterceptionIdentifier: OPTIONAL<LawfulInterceptionIdentifier>;
    let communicationIdentifier!: CommunicationIdentifier;
    let timeStamp!: TimeStamp;
    let initiator: OPTIONAL<Content_Report_initiator>;
    let content: OPTIONAL<Supplementary_Services>;
    let sMS_report: OPTIONAL<SMS_report>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => { domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<Content_Report_initiator>(() => _decode_Content_Report_initiator)(_el); },
        "content": (_el: _Element): void => { content = $._decode_implicit<Supplementary_Services>(() => _decode_Supplementary_Services)(_el); },
        "sMS-report": (_el: _Element): void => { sMS_report = $._decode_implicit<SMS_report>(() => _decode_SMS_report)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Content_Report,
        _extension_additions_list_spec_for_Content_Report,
        _root_component_type_list_2_spec_for_Content_Report,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Content_Report(
        domainID,
        lawfulInterceptionIdentifier,
        communicationIdentifier,
        timeStamp,
        initiator,
        content,
        sMS_report,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Content_Report(el);
}

let _cached_encoder_for_Content_Report: $.ASN1Encoder<Content_Report> | null = null;

/**
 * @summary Encodes a(n) Content_Report into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Content_Report, encoded as an ASN.1 Element.
 */
export
function _encode_Content_Report (value: Content_Report, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Content_Report) { _cached_encoder_for_Content_Report = function (value: Content_Report, elGetter: $.ASN1Encoder<Content_Report>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    if (value.lawfulInterceptionIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.initiator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Content_Report_initiator, $.BER)(value.initiator, $.BER);
    }
    if (value.content !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Supplementary_Services, $.BER)(value.content, $.BER);
    }
    if (value.sMS_report !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SMS_report, $.BER)(value.sMS_report, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Content_Report(value, elGetter);
}


/* eslint-enable */

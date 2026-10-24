/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { hi1OperationId } from "../HI1NotificationOperations/hi1OperationId.va.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { type TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { type LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { National_HI1_ASN1parameters, _decode_National_HI1_ASN1parameters, _encode_National_HI1_ASN1parameters } from "../HI1NotificationOperations/National-HI1-ASN1parameters.ta.mjs";
// export { National_HI1_ASN1parameters, _decode_National_HI1_ASN1parameters, _encode_National_HI1_ASN1parameters } from "../HI1NotificationOperations/National-HI1-ASN1parameters.ta.mjs";


/**
 * @summary Alarm_Indicator
 * @description
 *
 * Alarm for certain exceptional situations. Clause A.4.4.2 allows CC-link
 * faults to be sent to the LEMF as this kind of notification instead of only to
 * the administration centre. The events in table A.4.2 are: no answer from the
 * LEA, LEA busy, COLP error, CUG error, set-up failure within the network, lack
 * of system resources, and a general CC-link set-up failure. Delivery to the
 * administration centre is not part of the handover interface. The alarm text
 * is free format. The common alarm text is 1 to 256 octets. Until ASN.1 version
 * 6 (document version v3.12.1) it was limited to 25 octets. The TETRA alarm
 * text remains 1 to 25 octets.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.4, clause 7.2, clause A.4.4.2.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Alarm-Indicator ::= SEQUENCE
 * {
 *     domainID                        [0] OBJECT IDENTIFIER (hi1OperationId) OPTIONAL,
 *         -- Once using FTP delivery mechanism
 *     communicationIdentifier                    [1] CommunicationIdentifier OPTIONAL,
 *         -- Only the NWO/PA/SvPIdentifier is provided (the one provided with the
 *         -- Lawful authorization)
 *     timeStamp                        [2] TimeStamp,
 *         -- date and time of the report.
 *     alarm-information                    [3] OCTET STRING (SIZE (1..256)),
 *         -- Provides information about alarms (free format).
 *         -- Until ASN.1 version 6 (document version v3.12.1) the octet string
 *         -- was limited to a size of 25
 *     ...,
 *     lawfulInterceptionIdentifier                [4] LawfulInterceptionIdentifier OPTIONAL,
 *         -- This identifier is the LIID identity provided with the lawful authorization
 *         -- for each target in according to national law.
 *     national-HI1-ASN1parameters                [5] National-HI1-ASN1parameters OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Alarm_Indicator {
    /**
     * @summary `domainID`.
     * @description
     *
     * Used when the FTP delivery mechanism is used. Constrained to
     * `hi1OperationId`. Optional. This module's comment does not require the
     * sending entity to include the OID; that rule is the HI2 `domainID`
     * comment, and it is not stated here.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.4.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `communicationIdentifier`.
     * @description
     *
     * Only the NWO/PA/SvP identifier is provided, the one given with the lawful
     * authorization. Called `callIdentifier` in V1.1.1 of ES 201 671. Clause
     * 6.2 defines a communication identifier as the network identifier plus an
     * optional communication identity number. This comment limits the
     * notification to the NWO/PA/SvP identifier.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.4, clause 6.2.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Date and time of the report. `TimeStamp` is imported from HI2Operations.
     * This module does not define its coding.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.4.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `alarm_information`.
     * @description
     *
     * Free-format alarm information. Length 1 to 256 octets. Until ASN.1
     * version 6 (document version v3.12.1) the octet string was limited to 25
     * octets.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.4.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly alarm_information: OCTET_STRING;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     *
     * LIID from the lawful authorization for each target, according to national
     * law. Optional. Clause 6.1 requires a LIID on information exchanged at HI2
     * and HI3; this module still marks the component optional and ties it to
     * national law.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.4, clause 6.1.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: OPTIONAL<LawfulInterceptionIdentifier>;
    /**
     * @summary `national_HI1_ASN1parameters`.
     * @description
     *
     * National parameters, present when a country adds its own.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.4.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly national_HI1_ASN1parameters: OPTIONAL<National_HI1_ASN1parameters>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * An unrecognized parameter is ignored and processing of the record
     * continues. No special error or alarm is required, because the cause may
     * be a newer version of the specification. Content that is not recognized
     * is also ignored; the LEMF may raise an alarm. A record that cannot be
     * decoded is rejected when ROSE is used, or ignored.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex G, clause C.1.2.4, clause D.4.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        communicationIdentifier: OPTIONAL<CommunicationIdentifier>,
        timeStamp: TimeStamp,
        alarm_information: OCTET_STRING,
        lawfulInterceptionIdentifier?: OPTIONAL<LawfulInterceptionIdentifier>,
        national_HI1_ASN1parameters?: OPTIONAL<National_HI1_ASN1parameters>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
        this.communicationIdentifier = communicationIdentifier;
        this.timeStamp = timeStamp;
        this.alarm_information = alarm_information;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.national_HI1_ASN1parameters = national_HI1_ASN1parameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Alarm_Indicator
     * @description
     * 
     * This takes an `object` and converts it to a `Alarm_Indicator`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Alarm_Indicator`.
     * @returns {Alarm_Indicator}
     */
    public static _from_object (_o: { [_K in keyof (Alarm_Indicator)]: (Alarm_Indicator)[_K] }): Alarm_Indicator {
        return new Alarm_Indicator(_o.domainID, _o.communicationIdentifier, _o.timeStamp, _o.alarm_information, _o.lawfulInterceptionIdentifier, _o.national_HI1_ASN1parameters, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Alarm_Indicator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Alarm_Indicator: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("communicationIdentifier", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("alarm-information", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Alarm_Indicator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Alarm_Indicator: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Alarm_Indicator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Alarm_Indicator: $.ComponentSpec[] = [
    new $.ComponentSpec("lawfulInterceptionIdentifier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("national-HI1-ASN1parameters", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_Alarm_Indicator: $.ASN1Decoder<Alarm_Indicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Alarm_Indicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Alarm_Indicator (el: _Element): Alarm_Indicator {
    if (!_cached_decoder_for_Alarm_Indicator) { _cached_decoder_for_Alarm_Indicator = function (el: _Element): Alarm_Indicator {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    let timeStamp!: TimeStamp;
    let alarm_information!: OCTET_STRING;
    let lawfulInterceptionIdentifier: OPTIONAL<LawfulInterceptionIdentifier>;
    let national_HI1_ASN1parameters: OPTIONAL<National_HI1_ASN1parameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => {
            domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el);
            if (!domainID.isEqualTo(hi1OperationId)) {
                throw new ASN1Error("Alarm_Indicator.domainID violates OBJECT IDENTIFIER constraint");
            }
        },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "alarm-information": (_el: _Element): void => {
            alarm_information = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (alarm_information.length < 1 || alarm_information.length > 256) {
                throw new ASN1SizeError("Alarm_Indicator.alarm_information violates SIZE constraint");
            }
        },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "national-HI1-ASN1parameters": (_el: _Element): void => { national_HI1_ASN1parameters = $._decode_implicit<National_HI1_ASN1parameters>(() => _decode_National_HI1_ASN1parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Alarm_Indicator,
        _extension_additions_list_spec_for_Alarm_Indicator,
        _root_component_type_list_2_spec_for_Alarm_Indicator,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Alarm_Indicator(
        domainID,
        communicationIdentifier,
        timeStamp,
        alarm_information,
        lawfulInterceptionIdentifier,
        national_HI1_ASN1parameters,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Alarm_Indicator(el);
}

let _cached_encoder_for_Alarm_Indicator: $.ASN1Encoder<Alarm_Indicator> | null = null;

/**
 * @summary Encodes a(n) Alarm_Indicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Alarm_Indicator, encoded as an ASN.1 Element.
 */
export
function _encode_Alarm_Indicator (value: Alarm_Indicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Alarm_Indicator) { _cached_encoder_for_Alarm_Indicator = function (value: Alarm_Indicator, elGetter: $.ASN1Encoder<Alarm_Indicator>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    if (value.communicationIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.alarm_information, $.BER);
    if (value.lawfulInterceptionIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    }
    if (value.national_HI1_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_National_HI1_ASN1parameters, $.BER)(value.national_HI1_ASN1parameters, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Alarm_Indicator(value, elGetter);
}


/* eslint-enable */

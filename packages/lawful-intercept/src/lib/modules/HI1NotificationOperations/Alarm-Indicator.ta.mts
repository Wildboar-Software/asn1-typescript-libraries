/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { hi1OperationId } from "../HI1NotificationOperations/hi1OperationId.va.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { National_HI1_ASN1parameters, _decode_National_HI1_ASN1parameters, _encode_National_HI1_ASN1parameters } from "../HI1NotificationOperations/National-HI1-ASN1parameters.ta.mjs";
// export { National_HI1_ASN1parameters, _decode_National_HI1_ASN1parameters, _encode_National_HI1_ASN1parameters } from "../HI1NotificationOperations/National-HI1-ASN1parameters.ta.mjs";


/**
 * @summary Alarm_Indicator
 * @description
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
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `communicationIdentifier`.
     * @public
     * @readonly
     */
    readonly communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `alarm_information`.
     * @public
     * @readonly
     */
    readonly alarm_information: OCTET_STRING;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: OPTIONAL<LawfulInterceptionIdentifier>;
    /**
     * @summary `national_HI1_ASN1parameters`.
     * @public
     * @readonly
     */
    readonly national_HI1_ASN1parameters: OPTIONAL<National_HI1_ASN1parameters>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        communicationIdentifier: OPTIONAL<CommunicationIdentifier>,
        timeStamp: TimeStamp,
        alarm_information: OCTET_STRING,
        lawfulInterceptionIdentifier: OPTIONAL<LawfulInterceptionIdentifier>,
        national_HI1_ASN1parameters: OPTIONAL<National_HI1_ASN1parameters>,
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
    let _unrecognizedExtensionsList: _Element[] = [];
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

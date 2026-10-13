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
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { National_HI1_ASN1parameters, _decode_National_HI1_ASN1parameters, _encode_National_HI1_ASN1parameters } from "../HI1NotificationOperations/National-HI1-ASN1parameters.ta.mjs";
// export { National_HI1_ASN1parameters, _decode_National_HI1_ASN1parameters, _encode_National_HI1_ASN1parameters } from "../HI1NotificationOperations/National-HI1-ASN1parameters.ta.mjs";


/**
 * @summary Notification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Notification ::= SEQUENCE
 * {
 *     domainID                        [0] OBJECT IDENTIFIER (hi1OperationId) OPTIONAL,
 *         -- Once using FTP delivery mechanism
 *     lawfulInterceptionIdentifier     [1] LawfulInterceptionIdentifier,
 *         -- This identifier is the LIID identity provided with the lawful authorization
 *         -- for each target.
 *     communicationIdentifier         [2] CommunicationIdentifier OPTIONAL,
 *         -- Only the NWO/PA/SvPIdentifier is provided (the one provided with the Lawful
 *         -- authorization).
 *         -- Called "callIdentifier" in V1.1.1 of ES 201 671
 *     timeStamp                        [3] TimeStamp,
 *         -- date and time of the report.
 *     ...,
 *     national-HI1-ASN1parameters        [5] National-HI1-ASN1parameters OPTIONAL,
 *     target-Information                [6] OCTET STRING (SIZE (1..256)) OPTIONAL
 *         -- provides information about the number or the characteristic of the target 
 *         -- (e.g. E-mail address, E.164 number), ASCII format
 * }
 * ```
 * 
 * @class
 */
export
class Notification {
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
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
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
     * @summary `national_HI1_ASN1parameters`.
     * @public
     * @readonly
     */
    readonly national_HI1_ASN1parameters: OPTIONAL<National_HI1_ASN1parameters>;
    /**
     * @summary `target_Information`.
     * @public
     * @readonly
     */
    readonly target_Information: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        communicationIdentifier: OPTIONAL<CommunicationIdentifier>,
        timeStamp: TimeStamp,
        national_HI1_ASN1parameters: OPTIONAL<National_HI1_ASN1parameters>,
        target_Information: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.communicationIdentifier = communicationIdentifier;
        this.timeStamp = timeStamp;
        this.national_HI1_ASN1parameters = national_HI1_ASN1parameters;
        this.target_Information = target_Information;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Notification
     * @description
     * 
     * This takes an `object` and converts it to a `Notification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Notification`.
     * @returns {Notification}
     */
    public static _from_object (_o: { [_K in keyof (Notification)]: (Notification)[_K] }): Notification {
        return new Notification(_o.domainID, _o.lawfulInterceptionIdentifier, _o.communicationIdentifier, _o.timeStamp, _o.national_HI1_ASN1parameters, _o.target_Information, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Notification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Notification: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("communicationIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Notification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Notification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Notification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Notification: $.ComponentSpec[] = [
    new $.ComponentSpec("national-HI1-ASN1parameters", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("target-Information", true, $.hasTag(_TagClass.context, 6))
];

let _cached_decoder_for_Notification: $.ASN1Decoder<Notification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Notification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Notification (el: _Element): Notification {
    if (!_cached_decoder_for_Notification) { _cached_decoder_for_Notification = function (el: _Element): Notification {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    let timeStamp!: TimeStamp;
    let national_HI1_ASN1parameters: OPTIONAL<National_HI1_ASN1parameters>;
    let target_Information: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => {
            domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el);
            if (!domainID.isEqualTo(hi1OperationId)) {
                throw new ASN1Error("Notification.domainID violates OBJECT IDENTIFIER constraint");
            }
        },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "national-HI1-ASN1parameters": (_el: _Element): void => { national_HI1_ASN1parameters = $._decode_implicit<National_HI1_ASN1parameters>(() => _decode_National_HI1_ASN1parameters)(_el); },
        "target-Information": (_el: _Element): void => {
            target_Information = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (target_Information.length < 1 || target_Information.length > 256) {
                throw new ASN1SizeError("Notification.target_Information violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Notification,
        _extension_additions_list_spec_for_Notification,
        _root_component_type_list_2_spec_for_Notification,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Notification(
        domainID,
        lawfulInterceptionIdentifier,
        communicationIdentifier,
        timeStamp,
        national_HI1_ASN1parameters,
        target_Information,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Notification(el);
}

let _cached_encoder_for_Notification: $.ASN1Encoder<Notification> | null = null;

/**
 * @summary Encodes a(n) Notification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notification, encoded as an ASN.1 Element.
 */
export
function _encode_Notification (value: Notification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Notification) { _cached_encoder_for_Notification = function (value: Notification, elGetter: $.ASN1Encoder<Notification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    if (value.communicationIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.national_HI1_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_National_HI1_ASN1parameters, $.BER)(value.national_HI1_ASN1parameters, $.BER);
    }
    if (value.target_Information !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.target_Information, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Notification(value, elGetter);
}


/* eslint-enable */

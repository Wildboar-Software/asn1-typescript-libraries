/* eslint-disable */
import {
    GeneralizedTime,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSCorrelationNumber, _decode_MMSCorrelationNumber, _encode_MMSCorrelationNumber } from "../MmsHI2Operations/MMSCorrelationNumber.ta.mjs";
// export { MMSCorrelationNumber, _decode_MMSCorrelationNumber, _encode_MMSCorrelationNumber } from "../MmsHI2Operations/MMSCorrelationNumber.ta.mjs";
import { Addresses, _decode_Addresses, _encode_Addresses } from "../MmsHI2Operations/Addresses.ta.mjs";
// export { Addresses, _decode_Addresses, _encode_Addresses } from "../MmsHI2Operations/Addresses.ta.mjs";
import { From, _decode_From, _encode_From } from "../MmsHI2Operations/From.ta.mjs";
// export { From, _decode_From, _encode_From } from "../MmsHI2Operations/From.ta.mjs";
import { PreviouslySentBy, _decode_PreviouslySentBy, _encode_PreviouslySentBy } from "../MmsHI2Operations/PreviouslySentBy.ta.mjs";
// export { PreviouslySentBy, _decode_PreviouslySentBy, _encode_PreviouslySentBy } from "../MmsHI2Operations/PreviouslySentBy.ta.mjs";
import { PreviouslySentByDateTime, _decode_PreviouslySentByDateTime, _encode_PreviouslySentByDateTime } from "../MmsHI2Operations/PreviouslySentByDateTime.ta.mjs";
// export { PreviouslySentByDateTime, _decode_PreviouslySentByDateTime, _encode_PreviouslySentByDateTime } from "../MmsHI2Operations/PreviouslySentByDateTime.ta.mjs";
import { MMSState, _decode_MMSState, _encode_MMSState, _enum_for_MMSState } from "../MmsHI2Operations/MMSState.ta.mjs";
// export { MMSState, _enum_for_MMSState, MMSState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSState_retreived /* IMPORTED_LONG_ENUMERATION_ITEM */, retreived /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSState, _encode_MMSState } from "../MmsHI2Operations/MMSState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../MmsHI2Operations/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../MmsHI2Operations/MMFlags.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass } from "../MmsHI2Operations/MessageClass.ta.mjs";
// export { MessageClass, _decode_MessageClass, _encode_MessageClass } from "../MmsHI2Operations/MessageClass.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority, _enum_for_Priority } from "../MmsHI2Operations/Priority.ta.mjs";
// export { Priority, _enum_for_Priority, Priority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Priority, _encode_Priority } from "../MmsHI2Operations/Priority.ta.mjs";
import { YesNo, _decode_YesNo, _encode_YesNo } from "../MmsHI2Operations/YesNo.ta.mjs";
// export { YesNo, _decode_YesNo, _encode_YesNo } from "../MmsHI2Operations/YesNo.ta.mjs";
import { ContentLocation, _decode_ContentLocation, _encode_ContentLocation } from "../MmsHI2Operations/ContentLocation.ta.mjs";
// export { ContentLocation, _decode_ContentLocation, _encode_ContentLocation } from "../MmsHI2Operations/ContentLocation.ta.mjs";


/**
 * @summary MMBoxDescriptionPdus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMBoxDescriptionPdus ::= SEQUENCE
 * {
 *     mMSCorrelation        [1] MMSCorrelationNumber OPTIONAL,
 *     toAddresses            [2] Addresses,
 *     cCAddresses            [3] Addresses OPTIONAL,
 *     bCCAddresses        [4] Addresses OPTIONAL,
 *     fromAddress            [5] From,
 *     messageID            [6] UTF8String,
 *     mMSDateTime            [7] GeneralizedTime OPTIONAL,
 *     previouslySentBy        [8] PreviouslySentBy OPTIONAL,
 *     previouslySentByDateTime    [9] PreviouslySentByDateTime OPTIONAL,
 *     mMState            [10] MMSState OPTIONAL,
 *     mMFlags            [11] MMFlags OPTIONAL,
 *     messageClass        [12] MessageClass OPTIONAL,
 *     priority            [13] Priority OPTIONAL,
 *     deliveryTime        [14] GeneralizedTime OPTIONAL,
 *     expiry            [15] GeneralizedTime OPTIONAL,
 *     deliveryReport        [16] YesNo OPTIONAL,
 *     readReport            [17] YesNo OPTIONAL,
 *     messageSize            [18] INTEGER OPTIONAL,
 *     contentLocation        [19] ContentLocation OPTIONAL,
 *     contentType            [20] OCTET STRING OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MMBoxDescriptionPdus {
    /**
     * @summary `mMSCorrelation`.
     * @public
     * @readonly
     */
    readonly mMSCorrelation: OPTIONAL<MMSCorrelationNumber>;
    /**
     * @summary `toAddresses`.
     * @public
     * @readonly
     */
    readonly toAddresses: Addresses;
    /**
     * @summary `cCAddresses`.
     * @public
     * @readonly
     */
    readonly cCAddresses: OPTIONAL<Addresses>;
    /**
     * @summary `bCCAddresses`.
     * @public
     * @readonly
     */
    readonly bCCAddresses: OPTIONAL<Addresses>;
    /**
     * @summary `fromAddress`.
     * @public
     * @readonly
     */
    readonly fromAddress: From;
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: UTF8String;
    /**
     * @summary `mMSDateTime`.
     * @public
     * @readonly
     */
    readonly mMSDateTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `previouslySentBy`.
     * @public
     * @readonly
     */
    readonly previouslySentBy: OPTIONAL<PreviouslySentBy>;
    /**
     * @summary `previouslySentByDateTime`.
     * @public
     * @readonly
     */
    readonly previouslySentByDateTime: OPTIONAL<PreviouslySentByDateTime>;
    /**
     * @summary `mMState`.
     * @public
     * @readonly
     */
    readonly mMState: OPTIONAL<MMSState>;
    /**
     * @summary `mMFlags`.
     * @public
     * @readonly
     */
    readonly mMFlags: OPTIONAL<MMFlags>;
    /**
     * @summary `messageClass`.
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `priority`.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<Priority>;
    /**
     * @summary `deliveryTime`.
     * @public
     * @readonly
     */
    readonly deliveryTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `expiry`.
     * @public
     * @readonly
     */
    readonly expiry: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `deliveryReport`.
     * @public
     * @readonly
     */
    readonly deliveryReport: OPTIONAL<YesNo>;
    /**
     * @summary `readReport`.
     * @public
     * @readonly
     */
    readonly readReport: OPTIONAL<YesNo>;
    /**
     * @summary `messageSize`.
     * @public
     * @readonly
     */
    readonly messageSize: OPTIONAL<INTEGER>;
    /**
     * @summary `contentLocation`.
     * @public
     * @readonly
     */
    readonly contentLocation: OPTIONAL<ContentLocation>;
    /**
     * @summary `contentType`.
     * @public
     * @readonly
     */
    readonly contentType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mMSCorrelation: OPTIONAL<MMSCorrelationNumber>,
        toAddresses: Addresses,
        cCAddresses: OPTIONAL<Addresses>,
        bCCAddresses: OPTIONAL<Addresses>,
        fromAddress: From,
        messageID: UTF8String,
        mMSDateTime: OPTIONAL<GeneralizedTime>,
        previouslySentBy: OPTIONAL<PreviouslySentBy>,
        previouslySentByDateTime: OPTIONAL<PreviouslySentByDateTime>,
        mMState: OPTIONAL<MMSState>,
        mMFlags: OPTIONAL<MMFlags>,
        messageClass: OPTIONAL<MessageClass>,
        priority: OPTIONAL<Priority>,
        deliveryTime: OPTIONAL<GeneralizedTime>,
        expiry: OPTIONAL<GeneralizedTime>,
        deliveryReport: OPTIONAL<YesNo>,
        readReport: OPTIONAL<YesNo>,
        messageSize: OPTIONAL<INTEGER>,
        contentLocation: OPTIONAL<ContentLocation>,
        contentType: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mMSCorrelation = mMSCorrelation;
        this.toAddresses = toAddresses;
        this.cCAddresses = cCAddresses;
        this.bCCAddresses = bCCAddresses;
        this.fromAddress = fromAddress;
        this.messageID = messageID;
        this.mMSDateTime = mMSDateTime;
        this.previouslySentBy = previouslySentBy;
        this.previouslySentByDateTime = previouslySentByDateTime;
        this.mMState = mMState;
        this.mMFlags = mMFlags;
        this.messageClass = messageClass;
        this.priority = priority;
        this.deliveryTime = deliveryTime;
        this.expiry = expiry;
        this.deliveryReport = deliveryReport;
        this.readReport = readReport;
        this.messageSize = messageSize;
        this.contentLocation = contentLocation;
        this.contentType = contentType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMBoxDescriptionPdus
     * @description
     * 
     * This takes an `object` and converts it to a `MMBoxDescriptionPdus`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMBoxDescriptionPdus`.
     * @returns {MMBoxDescriptionPdus}
     */
    public static _from_object (_o: { [_K in keyof (MMBoxDescriptionPdus)]: (MMBoxDescriptionPdus)[_K] }): MMBoxDescriptionPdus {
        return new MMBoxDescriptionPdus(_o.mMSCorrelation, _o.toAddresses, _o.cCAddresses, _o.bCCAddresses, _o.fromAddress, _o.messageID, _o.mMSDateTime, _o.previouslySentBy, _o.previouslySentByDateTime, _o.mMState, _o.mMFlags, _o.messageClass, _o.priority, _o.deliveryTime, _o.expiry, _o.deliveryReport, _o.readReport, _o.messageSize, _o.contentLocation, _o.contentType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `mMState`
         * @public
         * @static
         */

    public static _enum_for_mMState = _enum_for_MMSState;        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_Priority;
}

/**
 * @summary The Leading Root Component Types of MMBoxDescriptionPdus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMBoxDescriptionPdus: $.ComponentSpec[] = [
    new $.ComponentSpec("mMSCorrelation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("toAddresses", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cCAddresses", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bCCAddresses", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("fromAddress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mMSDateTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("previouslySentBy", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("previouslySentByDateTime", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mMState", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mMFlags", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("deliveryTime", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("expiry", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("deliveryReport", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("readReport", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("messageSize", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("contentLocation", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("contentType", true, $.hasTag(_TagClass.context, 20))
];

/**
 * @summary The Trailing Root Component Types of MMBoxDescriptionPdus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMBoxDescriptionPdus: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMBoxDescriptionPdus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMBoxDescriptionPdus: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMBoxDescriptionPdus: $.ASN1Decoder<MMBoxDescriptionPdus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMBoxDescriptionPdus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMBoxDescriptionPdus (el: _Element): MMBoxDescriptionPdus {
    if (!_cached_decoder_for_MMBoxDescriptionPdus) { _cached_decoder_for_MMBoxDescriptionPdus = function (el: _Element): MMBoxDescriptionPdus {
    let mMSCorrelation: OPTIONAL<MMSCorrelationNumber>;
    let toAddresses!: Addresses;
    let cCAddresses: OPTIONAL<Addresses>;
    let bCCAddresses: OPTIONAL<Addresses>;
    let fromAddress!: From;
    let messageID!: UTF8String;
    let mMSDateTime: OPTIONAL<GeneralizedTime>;
    let previouslySentBy: OPTIONAL<PreviouslySentBy>;
    let previouslySentByDateTime: OPTIONAL<PreviouslySentByDateTime>;
    let mMState: OPTIONAL<MMSState>;
    let mMFlags: OPTIONAL<MMFlags>;
    let messageClass: OPTIONAL<MessageClass>;
    let priority: OPTIONAL<Priority>;
    let deliveryTime: OPTIONAL<GeneralizedTime>;
    let expiry: OPTIONAL<GeneralizedTime>;
    let deliveryReport: OPTIONAL<YesNo>;
    let readReport: OPTIONAL<YesNo>;
    let messageSize: OPTIONAL<INTEGER>;
    let contentLocation: OPTIONAL<ContentLocation>;
    let contentType: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mMSCorrelation": (_el: _Element): void => { mMSCorrelation = $._decode_implicit<MMSCorrelationNumber>(() => _decode_MMSCorrelationNumber)(_el); },
        "toAddresses": (_el: _Element): void => { toAddresses = $._decode_implicit<Addresses>(() => _decode_Addresses)(_el); },
        "cCAddresses": (_el: _Element): void => { cCAddresses = $._decode_implicit<Addresses>(() => _decode_Addresses)(_el); },
        "bCCAddresses": (_el: _Element): void => { bCCAddresses = $._decode_implicit<Addresses>(() => _decode_Addresses)(_el); },
        "fromAddress": (_el: _Element): void => { fromAddress = $._decode_implicit<From>(() => _decode_From)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mMSDateTime": (_el: _Element): void => { mMSDateTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "previouslySentBy": (_el: _Element): void => { previouslySentBy = $._decode_implicit<PreviouslySentBy>(() => _decode_PreviouslySentBy)(_el); },
        "previouslySentByDateTime": (_el: _Element): void => { previouslySentByDateTime = $._decode_implicit<PreviouslySentByDateTime>(() => _decode_PreviouslySentByDateTime)(_el); },
        "mMState": (_el: _Element): void => { mMState = $._decode_implicit<MMSState>(() => _decode_MMSState)(_el); },
        "mMFlags": (_el: _Element): void => { mMFlags = $._decode_implicit<MMFlags>(() => _decode_MMFlags)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_explicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "deliveryTime": (_el: _Element): void => { deliveryTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "expiry": (_el: _Element): void => { expiry = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "deliveryReport": (_el: _Element): void => { deliveryReport = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "readReport": (_el: _Element): void => { readReport = $._decode_implicit<YesNo>(() => _decode_YesNo)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "contentLocation": (_el: _Element): void => { contentLocation = $._decode_implicit<ContentLocation>(() => _decode_ContentLocation)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMBoxDescriptionPdus,
        _extension_additions_list_spec_for_MMBoxDescriptionPdus,
        _root_component_type_list_2_spec_for_MMBoxDescriptionPdus,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMBoxDescriptionPdus(
        mMSCorrelation,
        toAddresses,
        cCAddresses,
        bCCAddresses,
        fromAddress,
        messageID,
        mMSDateTime,
        previouslySentBy,
        previouslySentByDateTime,
        mMState,
        mMFlags,
        messageClass,
        priority,
        deliveryTime,
        expiry,
        deliveryReport,
        readReport,
        messageSize,
        contentLocation,
        contentType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMBoxDescriptionPdus(el);
}

let _cached_encoder_for_MMBoxDescriptionPdus: $.ASN1Encoder<MMBoxDescriptionPdus> | null = null;

/**
 * @summary Encodes a(n) MMBoxDescriptionPdus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMBoxDescriptionPdus, encoded as an ASN.1 Element.
 */
export
function _encode_MMBoxDescriptionPdus (value: MMBoxDescriptionPdus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMBoxDescriptionPdus) { _cached_encoder_for_MMBoxDescriptionPdus = function (value: MMBoxDescriptionPdus, elGetter: $.ASN1Encoder<MMBoxDescriptionPdus>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(20 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.mMSCorrelation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSCorrelationNumber, $.BER)(value.mMSCorrelation, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Addresses, $.BER)(value.toAddresses, $.BER);
    if (value.cCAddresses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Addresses, $.BER)(value.cCAddresses, $.BER);
    }
    if (value.bCCAddresses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Addresses, $.BER)(value.bCCAddresses, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_From, $.BER)(value.fromAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.messageID, $.BER);
    if (value.mMSDateTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeGeneralizedTime, $.BER)(value.mMSDateTime, $.BER);
    }
    if (value.previouslySentBy !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_PreviouslySentBy, $.BER)(value.previouslySentBy, $.BER);
    }
    if (value.previouslySentByDateTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PreviouslySentByDateTime, $.BER)(value.previouslySentByDateTime, $.BER);
    }
    if (value.mMState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_MMSState, $.BER)(value.mMState, $.BER);
    }
    if (value.mMFlags !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_MMFlags, $.BER)(value.mMFlags, $.BER);
    }
    if (value.messageClass !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER);
    }
    if (value.priority !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_Priority, $.BER)(value.priority, $.BER);
    }
    if (value.deliveryTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeGeneralizedTime, $.BER)(value.deliveryTime, $.BER);
    }
    if (value.expiry !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeGeneralizedTime, $.BER)(value.expiry, $.BER);
    }
    if (value.deliveryReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_YesNo, $.BER)(value.deliveryReport, $.BER);
    }
    if (value.readReport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_YesNo, $.BER)(value.readReport, $.BER);
    }
    if (value.messageSize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER)(value.messageSize, $.BER);
    }
    if (value.contentLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_ContentLocation, $.BER)(value.contentLocation, $.BER);
    }
    if (value.contentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.contentType, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMBoxDescriptionPdus(value, elGetter);
}


/* eslint-enable */

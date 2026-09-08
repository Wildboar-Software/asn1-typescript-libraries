/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { BackInService, BackInService_cause /* IMPORTED_LONG_NAMED_BIT */, BackInService_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_BackInService, _encode_BackInService } from "../CSTA-capability-exchange/BackInService.ta.mjs";
// export { BackInService, BackInService_cause /* IMPORTED_LONG_NAMED_BIT */, BackInService_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_BackInService, _encode_BackInService } from "../CSTA-capability-exchange/BackInService.ta.mjs";
import { DeviceCapsChanged, DeviceCapsChanged_cause /* IMPORTED_LONG_NAMED_BIT */, DeviceCapsChanged_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_DeviceCapsChanged, _encode_DeviceCapsChanged } from "../CSTA-capability-exchange/DeviceCapsChanged.ta.mjs";
// export { DeviceCapsChanged, DeviceCapsChanged_cause /* IMPORTED_LONG_NAMED_BIT */, DeviceCapsChanged_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_DeviceCapsChanged, _encode_DeviceCapsChanged } from "../CSTA-capability-exchange/DeviceCapsChanged.ta.mjs";
import { OutOfService, OutOfService_cause /* IMPORTED_LONG_NAMED_BIT */, OutOfService_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_OutOfService, _encode_OutOfService } from "../CSTA-capability-exchange/OutOfService.ta.mjs";
// export { OutOfService, OutOfService_cause /* IMPORTED_LONG_NAMED_BIT */, OutOfService_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_OutOfService, _encode_OutOfService } from "../CSTA-capability-exchange/OutOfService.ta.mjs";
import { PartiallyInService, PartiallyInService_cause /* IMPORTED_LONG_NAMED_BIT */, PartiallyInService_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_PartiallyInService, _encode_PartiallyInService } from "../CSTA-capability-exchange/PartiallyInService.ta.mjs";
// export { PartiallyInService, PartiallyInService_cause /* IMPORTED_LONG_NAMED_BIT */, PartiallyInService_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_PartiallyInService, _encode_PartiallyInService } from "../CSTA-capability-exchange/PartiallyInService.ta.mjs";


/**
 * @summary DeviceMaintEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceMaintEvtsList ::= SEQUENCE
 * {     backInService             [0] IMPLICIT     BackInService         OPTIONAL,
 *     deviceCapsChanged         [1] IMPLICIT     DeviceCapsChanged     OPTIONAL,
 *     outOfService             [2] IMPLICIT     OutOfService         OPTIONAL,
 *     partiallyInService        [3] IMPLICIT    PartiallyInService    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DeviceMaintEvtsList {
    constructor (
        /**
         * @summary `backInService`.
         * @public
         * @readonly
         */
        readonly backInService: OPTIONAL<BackInService>,
        /**
         * @summary `deviceCapsChanged`.
         * @public
         * @readonly
         */
        readonly deviceCapsChanged: OPTIONAL<DeviceCapsChanged>,
        /**
         * @summary `outOfService`.
         * @public
         * @readonly
         */
        readonly outOfService: OPTIONAL<OutOfService>,
        /**
         * @summary `partiallyInService`.
         * @public
         * @readonly
         */
        readonly partiallyInService: OPTIONAL<PartiallyInService>
    ) {}

    /**
     * @summary Restructures an object into a DeviceMaintEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceMaintEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceMaintEvtsList`.
     * @returns {DeviceMaintEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (DeviceMaintEvtsList)]: (DeviceMaintEvtsList)[_K] }): DeviceMaintEvtsList {
        return new DeviceMaintEvtsList(_o.backInService, _o.deviceCapsChanged, _o.outOfService, _o.partiallyInService);
    }


}

/**
 * @summary The Leading Root Component Types of DeviceMaintEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceMaintEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("backInService", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("deviceCapsChanged", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("outOfService", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("partiallyInService", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DeviceMaintEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceMaintEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceMaintEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceMaintEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceMaintEvtsList: $.ASN1Decoder<DeviceMaintEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceMaintEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceMaintEvtsList (el: _Element): DeviceMaintEvtsList {
    if (!_cached_decoder_for_DeviceMaintEvtsList) { _cached_decoder_for_DeviceMaintEvtsList = function (el: _Element): DeviceMaintEvtsList {
    let backInService: OPTIONAL<BackInService>;
    let deviceCapsChanged: OPTIONAL<DeviceCapsChanged>;
    let outOfService: OPTIONAL<OutOfService>;
    let partiallyInService: OPTIONAL<PartiallyInService>;
    const callbacks: $.DecodingMap = {
        "backInService": (_el: _Element): void => { backInService = $._decode_implicit<BackInService>(() => _decode_BackInService)(_el); },
        "deviceCapsChanged": (_el: _Element): void => { deviceCapsChanged = $._decode_implicit<DeviceCapsChanged>(() => _decode_DeviceCapsChanged)(_el); },
        "outOfService": (_el: _Element): void => { outOfService = $._decode_implicit<OutOfService>(() => _decode_OutOfService)(_el); },
        "partiallyInService": (_el: _Element): void => { partiallyInService = $._decode_implicit<PartiallyInService>(() => _decode_PartiallyInService)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceMaintEvtsList,
        _extension_additions_list_spec_for_DeviceMaintEvtsList,
        _root_component_type_list_2_spec_for_DeviceMaintEvtsList,
        undefined,
    );
    return new DeviceMaintEvtsList(
        backInService,
        deviceCapsChanged,
        outOfService,
        partiallyInService
    );
}; }
    return _cached_decoder_for_DeviceMaintEvtsList(el);
}

let _cached_encoder_for_DeviceMaintEvtsList: $.ASN1Encoder<DeviceMaintEvtsList> | null = null;

/**
 * @summary Encodes a(n) DeviceMaintEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceMaintEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceMaintEvtsList (value: DeviceMaintEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceMaintEvtsList) { _cached_encoder_for_DeviceMaintEvtsList = function (value: DeviceMaintEvtsList, elGetter: $.ASN1Encoder<DeviceMaintEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.backInService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_BackInService, $.BER)(value.backInService, $.BER)),
            /* IF_ABSENT  */ ((value.deviceCapsChanged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DeviceCapsChanged, $.BER)(value.deviceCapsChanged, $.BER)),
            /* IF_ABSENT  */ ((value.outOfService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_OutOfService, $.BER)(value.outOfService, $.BER)),
            /* IF_ABSENT  */ ((value.partiallyInService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PartiallyInService, $.BER)(value.partiallyInService, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceMaintEvtsList(value, elGetter);
}


/* eslint-enable */

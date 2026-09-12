/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
// export { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";


/**
 * @summary TakeControl_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TakeControl-Request ::= SEQUENCE {
 *    semaphoreName                 [0] ObjectName,
 *    namedToken                    [1] IMPLICIT Identifier OPTIONAL,
 *    priority                      [2] IMPLICIT Priority DEFAULT normalPriority,
 *    acceptableDelay               [3] IMPLICIT Unsigned32 OPTIONAL,
 *    controlTimeOut                [4] IMPLICIT Unsigned32 OPTIONAL,
 *    abortOnTimeOut                [5] IMPLICIT BOOLEAN OPTIONAL,
 *    relinquishIfConnectionLost    [6] IMPLICIT BOOLEAN DEFAULT TRUE
 * ,  applicationToPreempt          [7] IMPLICIT ApplicationReference OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class TakeControl_Request {
    constructor (
        /**
         * @summary `semaphoreName`.
         * @public
         * @readonly
         */
        readonly semaphoreName: ObjectName,
        /**
         * @summary `namedToken`.
         * @public
         * @readonly
         */
        readonly namedToken: OPTIONAL<Identifier>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority>,
        /**
         * @summary `acceptableDelay`.
         * @public
         * @readonly
         */
        readonly acceptableDelay: OPTIONAL<Unsigned32>,
        /**
         * @summary `controlTimeOut`.
         * @public
         * @readonly
         */
        readonly controlTimeOut: OPTIONAL<Unsigned32>,
        /**
         * @summary `abortOnTimeOut`.
         * @public
         * @readonly
         */
        readonly abortOnTimeOut: OPTIONAL<BOOLEAN>,
        /**
         * @summary `relinquishIfConnectionLost`.
         * @public
         * @readonly
         */
        readonly relinquishIfConnectionLost: OPTIONAL<BOOLEAN>,
        /**
         * @summary `applicationToPreempt`.
         * @public
         * @readonly
         */
        readonly applicationToPreempt: OPTIONAL<ApplicationReference>
    ) {}

    /**
     * @summary Restructures an object into a TakeControl_Request
     * @description
     * 
     * This takes an `object` and converts it to a `TakeControl_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TakeControl_Request`.
     * @returns {TakeControl_Request}
     */
    public static _from_object (_o: { [_K in keyof (TakeControl_Request)]: (TakeControl_Request)[_K] }): TakeControl_Request {
        return new TakeControl_Request(_o.semaphoreName, _o.namedToken, _o.priority, _o.acceptableDelay, _o.controlTimeOut, _o.abortOnTimeOut, _o.relinquishIfConnectionLost, _o.applicationToPreempt);
    }

    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority () { return normalPriority; }
    /**
     * @summary Getter that returns the default value for `relinquishIfConnectionLost`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_relinquishIfConnectionLost () { return true; }
}

/**
 * @summary The Leading Root Component Types of TakeControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TakeControl_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("semaphoreName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("namedToken", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("acceptableDelay", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("controlTimeOut", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("abortOnTimeOut", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("relinquishIfConnectionLost", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("applicationToPreempt", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of TakeControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TakeControl_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TakeControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TakeControl_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TakeControl_Request: $.ASN1Decoder<TakeControl_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TakeControl_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TakeControl_Request (el: _Element): TakeControl_Request {
    if (!_cached_decoder_for_TakeControl_Request) { _cached_decoder_for_TakeControl_Request = function (el: _Element): TakeControl_Request {
    let semaphoreName!: ObjectName;
    let namedToken: OPTIONAL<Identifier>;
    let priority: OPTIONAL<Priority> = TakeControl_Request._default_value_for_priority;
    let acceptableDelay: OPTIONAL<Unsigned32>;
    let controlTimeOut: OPTIONAL<Unsigned32>;
    let abortOnTimeOut: OPTIONAL<BOOLEAN>;
    let relinquishIfConnectionLost: OPTIONAL<BOOLEAN> = TakeControl_Request._default_value_for_relinquishIfConnectionLost;
    let applicationToPreempt: OPTIONAL<ApplicationReference>;
    const callbacks: $.DecodingMap = {
        "semaphoreName": (_el: _Element): void => { semaphoreName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "namedToken": (_el: _Element): void => { namedToken = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "acceptableDelay": (_el: _Element): void => { acceptableDelay = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "controlTimeOut": (_el: _Element): void => { controlTimeOut = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "abortOnTimeOut": (_el: _Element): void => { abortOnTimeOut = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "relinquishIfConnectionLost": (_el: _Element): void => { relinquishIfConnectionLost = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "applicationToPreempt": (_el: _Element): void => { applicationToPreempt = $._decode_implicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TakeControl_Request,
        _extension_additions_list_spec_for_TakeControl_Request,
        _root_component_type_list_2_spec_for_TakeControl_Request,
        undefined,
    );
    return new TakeControl_Request(
        semaphoreName,
        namedToken,
        priority,
        acceptableDelay,
        controlTimeOut,
        abortOnTimeOut,
        relinquishIfConnectionLost,
        applicationToPreempt
    );
}; }
    return _cached_decoder_for_TakeControl_Request(el);
}

let _cached_encoder_for_TakeControl_Request: $.ASN1Encoder<TakeControl_Request> | null = null;

/**
 * @summary Encodes a(n) TakeControl_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TakeControl_Request, encoded as an ASN.1 Element.
 */
export
function _encode_TakeControl_Request (value: TakeControl_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TakeControl_Request) { _cached_encoder_for_TakeControl_Request = function (value: TakeControl_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.semaphoreName, $.BER),
            /* IF_ABSENT  */ ((value.namedToken === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER)(value.namedToken, $.BER)),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, TakeControl_Request._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.acceptableDelay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Unsigned32, $.BER)(value.acceptableDelay, $.BER)),
            /* IF_ABSENT  */ ((value.controlTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Unsigned32, $.BER)(value.controlTimeOut, $.BER)),
            /* IF_ABSENT  */ ((value.abortOnTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.abortOnTimeOut, $.BER)),
            /* IF_DEFAULT */ (value.relinquishIfConnectionLost === undefined || $.deepEq(value.relinquishIfConnectionLost, TakeControl_Request._default_value_for_relinquishIfConnectionLost) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.relinquishIfConnectionLost, $.BER)),
            /* IF_ABSENT  */ ((value.applicationToPreempt === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ApplicationReference, $.BER)(value.applicationToPreempt, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TakeControl_Request(value, elGetter);
}


/* eslint-enable */

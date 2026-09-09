/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MonitorObject, _decode_MonitorObject, _encode_MonitorObject } from "../CSTA-status-reporting/MonitorObject.ta.mjs";

import { MonitorFilter, _decode_MonitorFilter, _encode_MonitorFilter } from "../CSTA-status-reporting/MonitorFilter.ta.mjs";

import {
    MonitorType,
    _enum_for_MonitorType,
    _decode_MonitorType,
    _encode_MonitorType
} from "../CSTA-status-reporting/MonitorType.ta.mjs";

import {
    MonitorMediaClass,
    data /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_MonitorMediaClass,
    _encode_MonitorMediaClass
} from "../CSTA-status-reporting/MonitorMediaClass.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary MonitorStartArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorStartArgument ::= SEQUENCE
 * {     monitorObject             MonitorObject,
 *     requestedMonitorFilter         [0] IMPLICIT MonitorFilter     OPTIONAL,
 *     monitorType             MonitorType             OPTIONAL,
 *     requestedMonitorMediaClass     [1] IMPLICIT MonitorMediaClass     OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MonitorStartArgument {
    constructor (
        /**
         * @summary `monitorObject`.
         * @public
         * @readonly
         */
        readonly monitorObject: MonitorObject,
        /**
         * @summary `requestedMonitorFilter`.
         * @public
         * @readonly
         */
        readonly requestedMonitorFilter: OPTIONAL<MonitorFilter>,
        /**
         * @summary `monitorType`.
         * @public
         * @readonly
         */
        readonly monitorType: OPTIONAL<MonitorType>,
        /**
         * @summary `requestedMonitorMediaClass`.
         * @public
         * @readonly
         */
        readonly requestedMonitorMediaClass: OPTIONAL<MonitorMediaClass>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MonitorStartArgument
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorStartArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorStartArgument`.
     * @returns {MonitorStartArgument}
     */
    public static _from_object (_o: { [_K in keyof (MonitorStartArgument)]: (MonitorStartArgument)[_K] }): MonitorStartArgument {
        return new MonitorStartArgument(_o.monitorObject, _o.requestedMonitorFilter, _o.monitorType, _o.requestedMonitorMediaClass, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `monitorType`
         * @public
         * @static
         */

    public static _enum_for_monitorType = _enum_for_MonitorType;
}

/**
 * @summary The Leading Root Component Types of MonitorStartArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorStartArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("monitorObject", false, $.hasAnyTag),
    new $.ComponentSpec("requestedMonitorFilter", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("monitorType", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("requestedMonitorMediaClass", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MonitorStartArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorStartArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitorStartArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorStartArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorStartArgument: $.ASN1Decoder<MonitorStartArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorStartArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorStartArgument (el: _Element): MonitorStartArgument {
    if (!_cached_decoder_for_MonitorStartArgument) { _cached_decoder_for_MonitorStartArgument = function (el: _Element): MonitorStartArgument {
    let monitorObject!: MonitorObject;
    let requestedMonitorFilter: OPTIONAL<MonitorFilter>;
    let monitorType: OPTIONAL<MonitorType>;
    let requestedMonitorMediaClass: OPTIONAL<MonitorMediaClass>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "monitorObject": (_el: _Element): void => { monitorObject = _decode_MonitorObject(_el); },
        "requestedMonitorFilter": (_el: _Element): void => { requestedMonitorFilter = $._decode_implicit<MonitorFilter>(() => _decode_MonitorFilter)(_el); },
        "monitorType": (_el: _Element): void => { monitorType = _decode_MonitorType(_el); },
        "requestedMonitorMediaClass": (_el: _Element): void => { requestedMonitorMediaClass = $._decode_implicit<MonitorMediaClass>(() => _decode_MonitorMediaClass)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorStartArgument,
        _extension_additions_list_spec_for_MonitorStartArgument,
        _root_component_type_list_2_spec_for_MonitorStartArgument,
        undefined,
    );
    return new MonitorStartArgument(
        monitorObject,
        requestedMonitorFilter,
        monitorType,
        requestedMonitorMediaClass,
        extensions
    );
}; }
    return _cached_decoder_for_MonitorStartArgument(el);
}

let _cached_encoder_for_MonitorStartArgument: $.ASN1Encoder<MonitorStartArgument> | null = null;

/**
 * @summary Encodes a(n) MonitorStartArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorStartArgument, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorStartArgument (value: MonitorStartArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorStartArgument) { _cached_encoder_for_MonitorStartArgument = function (value: MonitorStartArgument, elGetter: $.ASN1Encoder<MonitorStartArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MonitorObject(value.monitorObject, $.BER),
            /* IF_ABSENT  */ ((value.requestedMonitorFilter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MonitorFilter, $.BER)(value.requestedMonitorFilter, $.BER)),
            /* IF_ABSENT  */ ((value.monitorType === undefined) ? undefined : _encode_MonitorType(value.monitorType, $.BER)),
            /* IF_ABSENT  */ ((value.requestedMonitorMediaClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMediaClass, $.BER)(value.requestedMonitorMediaClass, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitorStartArgument(value, elGetter);
}


/* eslint-enable */

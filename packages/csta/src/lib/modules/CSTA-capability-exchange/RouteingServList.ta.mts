/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { RouteRegister, _decode_RouteRegister, _encode_RouteRegister } from "../CSTA-capability-exchange/RouteRegister.ta.mjs";

import { RouteRegisterCancel, _decode_RouteRegisterCancel, _encode_RouteRegisterCancel } from "../CSTA-capability-exchange/RouteRegisterCancel.ta.mjs";

import { RouteRegisterAbort, _decode_RouteRegisterAbort, _encode_RouteRegisterAbort } from "../CSTA-capability-exchange/RouteRegisterAbort.ta.mjs";

import { ReRoute, _decode_ReRoute, _encode_ReRoute } from "../CSTA-capability-exchange/ReRoute.ta.mjs";

import { RouteEnd, _decode_RouteEnd, _encode_RouteEnd } from "../CSTA-capability-exchange/RouteEnd.ta.mjs";

import { RouteReject, _decode_RouteReject, _encode_RouteReject } from "../CSTA-capability-exchange/RouteReject.ta.mjs";

import { RouteRequest, _decode_RouteRequest, _encode_RouteRequest } from "../CSTA-capability-exchange/RouteRequest.ta.mjs";

import {
    RouteSelect,
    routeUsed /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_RouteSelect,
    _encode_RouteSelect
} from "../CSTA-capability-exchange/RouteSelect.ta.mjs";

import { RouteUsed, _decode_RouteUsed, _encode_RouteUsed } from "../CSTA-capability-exchange/RouteUsed.ta.mjs";



/**
 * @summary RouteingServList
 * @description
 * Routeing services the SF supports (ECMA-269 Annex C.11, ECMA-285 §9.10). Omit
 * unsupported services.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingServList ::= SEQUENCE
 * {     routeRegister             [ 0] IMPLICIT     RouteRegister         OPTIONAL,
 *     routeRegisterCancel         [ 1] IMPLICIT     RouteRegisterCancel     OPTIONAL,
 *     routeRegisterAbort         [ 2] IMPLICIT     RouteRegisterAbort     OPTIONAL,
 *     reRoute             [ 3] IMPLICIT     ReRoute         OPTIONAL,
 *     routeEnd             [ 4] IMPLICIT     RouteEnd         OPTIONAL,
 *     routeReject             [ 5] IMPLICIT     RouteReject         OPTIONAL,
 *     routeRequest             [ 6] IMPLICIT     RouteRequest         OPTIONAL,
 *     routeSelect             [ 7] IMPLICIT     RouteSelect         OPTIONAL,
 *     routeUsed             [ 8] IMPLICIT     RouteUsed         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteingServList {
    constructor (
        /**
         * @summary `routeRegister`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly routeRegister: OPTIONAL<RouteRegister>,
        /**
         * @summary `routeRegisterCancel`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly routeRegisterCancel: OPTIONAL<RouteRegisterCancel>,
        /**
         * @summary `routeRegisterAbort`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly routeRegisterAbort: OPTIONAL<RouteRegisterAbort>,
        /**
         * @summary `reRoute`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly reRoute: OPTIONAL<ReRoute>,
        /**
         * @summary `routeEnd`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly routeEnd: OPTIONAL<RouteEnd>,
        /**
         * @summary `routeReject`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly routeReject: OPTIONAL<RouteReject>,
        /**
         * @summary `routeRequest`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly routeRequest: OPTIONAL<RouteRequest>,
        /**
         * @summary `routeSelect`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly routeSelect: OPTIONAL<RouteSelect>,
        /**
         * @summary `routeUsed`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly routeUsed: OPTIONAL<RouteUsed>
    ) {}

    /**
     * @summary Restructures an object into a RouteingServList
     * @description
     * 
     * This takes an `object` and converts it to a `RouteingServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteingServList`.
     * @returns {RouteingServList}
     */
    public static _from_object (_o: { [_K in keyof (RouteingServList)]: (RouteingServList)[_K] }): RouteingServList {
        return new RouteingServList(_o.routeRegister, _o.routeRegisterCancel, _o.routeRegisterAbort, _o.reRoute, _o.routeEnd, _o.routeReject, _o.routeRequest, _o.routeSelect, _o.routeUsed);
    }


}

/**
 * @summary The Leading Root Component Types of RouteingServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteingServList: $.ComponentSpec[] = [
    new $.ComponentSpec("routeRegister", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("routeRegisterCancel", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("routeRegisterAbort", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("reRoute", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("routeEnd", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("routeReject", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("routeRequest", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("routeSelect", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("routeUsed", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of RouteingServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteingServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteingServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteingServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteingServList: $.ASN1Decoder<RouteingServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteingServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteingServList (el: _Element): RouteingServList {
    if (!_cached_decoder_for_RouteingServList) { _cached_decoder_for_RouteingServList = function (el: _Element): RouteingServList {
    let routeRegister: OPTIONAL<RouteRegister>;
    let routeRegisterCancel: OPTIONAL<RouteRegisterCancel>;
    let routeRegisterAbort: OPTIONAL<RouteRegisterAbort>;
    let reRoute: OPTIONAL<ReRoute>;
    let routeEnd: OPTIONAL<RouteEnd>;
    let routeReject: OPTIONAL<RouteReject>;
    let routeRequest: OPTIONAL<RouteRequest>;
    let routeSelect: OPTIONAL<RouteSelect>;
    let routeUsed: OPTIONAL<RouteUsed>;
    const callbacks: $.DecodingMap = {
        "routeRegister": (_el: _Element): void => { routeRegister = $._decode_implicit<RouteRegister>(() => _decode_RouteRegister)(_el); },
        "routeRegisterCancel": (_el: _Element): void => { routeRegisterCancel = $._decode_implicit<RouteRegisterCancel>(() => _decode_RouteRegisterCancel)(_el); },
        "routeRegisterAbort": (_el: _Element): void => { routeRegisterAbort = $._decode_implicit<RouteRegisterAbort>(() => _decode_RouteRegisterAbort)(_el); },
        "reRoute": (_el: _Element): void => { reRoute = $._decode_implicit<ReRoute>(() => _decode_ReRoute)(_el); },
        "routeEnd": (_el: _Element): void => { routeEnd = $._decode_implicit<RouteEnd>(() => _decode_RouteEnd)(_el); },
        "routeReject": (_el: _Element): void => { routeReject = $._decode_implicit<RouteReject>(() => _decode_RouteReject)(_el); },
        "routeRequest": (_el: _Element): void => { routeRequest = $._decode_implicit<RouteRequest>(() => _decode_RouteRequest)(_el); },
        "routeSelect": (_el: _Element): void => { routeSelect = $._decode_implicit<RouteSelect>(() => _decode_RouteSelect)(_el); },
        "routeUsed": (_el: _Element): void => { routeUsed = $._decode_implicit<RouteUsed>(() => _decode_RouteUsed)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteingServList,
        _extension_additions_list_spec_for_RouteingServList,
        _root_component_type_list_2_spec_for_RouteingServList,
        undefined,
    );
    return new RouteingServList(
        routeRegister,
        routeRegisterCancel,
        routeRegisterAbort,
        reRoute,
        routeEnd,
        routeReject,
        routeRequest,
        routeSelect,
        routeUsed
    );
}; }
    return _cached_decoder_for_RouteingServList(el);
}

let _cached_encoder_for_RouteingServList: $.ASN1Encoder<RouteingServList> | null = null;

/**
 * @summary Encodes a(n) RouteingServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteingServList, encoded as an ASN.1 Element.
 */
export
function _encode_RouteingServList (value: RouteingServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteingServList) { _cached_encoder_for_RouteingServList = function (value: RouteingServList, elGetter: $.ASN1Encoder<RouteingServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.routeRegister === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RouteRegister, $.BER)(value.routeRegister, $.BER)),
            /* IF_ABSENT  */ ((value.routeRegisterCancel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RouteRegisterCancel, $.BER)(value.routeRegisterCancel, $.BER)),
            /* IF_ABSENT  */ ((value.routeRegisterAbort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RouteRegisterAbort, $.BER)(value.routeRegisterAbort, $.BER)),
            /* IF_ABSENT  */ ((value.reRoute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ReRoute, $.BER)(value.reRoute, $.BER)),
            /* IF_ABSENT  */ ((value.routeEnd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RouteEnd, $.BER)(value.routeEnd, $.BER)),
            /* IF_ABSENT  */ ((value.routeReject === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RouteReject, $.BER)(value.routeReject, $.BER)),
            /* IF_ABSENT  */ ((value.routeRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_RouteRequest, $.BER)(value.routeRequest, $.BER)),
            /* IF_ABSENT  */ ((value.routeSelect === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_RouteSelect, $.BER)(value.routeSelect, $.BER)),
            /* IF_ABSENT  */ ((value.routeUsed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_RouteUsed, $.BER)(value.routeUsed, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteingServList(value, elGetter);
}


/* eslint-enable */

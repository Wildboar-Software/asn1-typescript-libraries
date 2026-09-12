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
import { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";
// export { Modifier, _decode_Modifier, _encode_Modifier } from "../MMS-Object-Module-1/Modifier.ta.mjs";
import { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
// export { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
import { Request_Detail, _decode_Request_Detail, _encode_Request_Detail } from "../ISO-9506-MMS-1/Request-Detail.ta.mjs";
// export { Request_Detail, _decode_Request_Detail, _encode_Request_Detail } from "../ISO-9506-MMS-1/Request-Detail.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary GetEventActionAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEventActionAttributes-Response ::= SEQUENCE {
 *    mmsDeletable                  [0] IMPLICIT BOOLEAN DEFAULT FALSE,
 *    listOfModifier                [1] IMPLICIT SEQUENCE OF Modifier,
 *    confirmedServiceRequest       [2] ConfirmedServiceRequest
 * ,  cs-extension                  [79] Request-Detail OPTIONAL
 *               -- shall not be transmitted if value is the value
 *               -- of a tagged type derived from NULL
 * ,  accessControlList             [3] IMPLICIT Identifier OPTIONAL
 *              -- Shall not appear in minor version one or two
 *    }
 * ```
 * 
 * @class
 */
export
class GetEventActionAttributes_Response {
    constructor (
        /**
         * @summary `mmsDeletable`.
         * @public
         * @readonly
         */
        readonly mmsDeletable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `listOfModifier`.
         * @public
         * @readonly
         */
        readonly listOfModifier: Modifier[],
        /**
         * @summary `confirmedServiceRequest`.
         * @public
         * @readonly
         */
        readonly confirmedServiceRequest: ConfirmedServiceRequest,
        /**
         * @summary `cs_extension`.
         * @public
         * @readonly
         */
        readonly cs_extension: OPTIONAL<Request_Detail>,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a GetEventActionAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetEventActionAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEventActionAttributes_Response`.
     * @returns {GetEventActionAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetEventActionAttributes_Response)]: (GetEventActionAttributes_Response)[_K] }): GetEventActionAttributes_Response {
        return new GetEventActionAttributes_Response(_o.mmsDeletable, _o.listOfModifier, _o.confirmedServiceRequest, _o.cs_extension, _o.accessControlList);
    }

    /**
     * @summary Getter that returns the default value for `mmsDeletable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mmsDeletable () { return false; }
}

/**
 * @summary The Leading Root Component Types of GetEventActionAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEventActionAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("mmsDeletable", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfModifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("confirmedServiceRequest", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cs-extension", true, $.hasTag(_TagClass.context, 79)),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GetEventActionAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEventActionAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEventActionAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEventActionAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEventActionAttributes_Response: $.ASN1Decoder<GetEventActionAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEventActionAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEventActionAttributes_Response (el: _Element): GetEventActionAttributes_Response {
    if (!_cached_decoder_for_GetEventActionAttributes_Response) { _cached_decoder_for_GetEventActionAttributes_Response = function (el: _Element): GetEventActionAttributes_Response {
    let mmsDeletable: OPTIONAL<BOOLEAN> = GetEventActionAttributes_Response._default_value_for_mmsDeletable;
    let listOfModifier!: Modifier[];
    let confirmedServiceRequest!: ConfirmedServiceRequest;
    let cs_extension: OPTIONAL<Request_Detail>;
    let accessControlList: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "listOfModifier": (_el: _Element): void => { listOfModifier = $._decode_implicit<Modifier[]>(() => $._decodeSequenceOf<Modifier>(() => _decode_Modifier))(_el); },
        "confirmedServiceRequest": (_el: _Element): void => { confirmedServiceRequest = $._decode_explicit<ConfirmedServiceRequest>(() => _decode_ConfirmedServiceRequest)(_el); },
        "cs-extension": (_el: _Element): void => { cs_extension = $._decode_explicit<Request_Detail>(() => _decode_Request_Detail)(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetEventActionAttributes_Response,
        _extension_additions_list_spec_for_GetEventActionAttributes_Response,
        _root_component_type_list_2_spec_for_GetEventActionAttributes_Response,
        undefined,
    );
    return new GetEventActionAttributes_Response(
        mmsDeletable,
        listOfModifier,
        confirmedServiceRequest,
        cs_extension,
        accessControlList
    );
}; }
    return _cached_decoder_for_GetEventActionAttributes_Response(el);
}

let _cached_encoder_for_GetEventActionAttributes_Response: $.ASN1Encoder<GetEventActionAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetEventActionAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEventActionAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetEventActionAttributes_Response (value: GetEventActionAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEventActionAttributes_Response) { _cached_encoder_for_GetEventActionAttributes_Response = function (value: GetEventActionAttributes_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.mmsDeletable === undefined || $.deepEq(value.mmsDeletable, GetEventActionAttributes_Response._default_value_for_mmsDeletable) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Modifier>(() => _encode_Modifier, $.BER), $.BER)(value.listOfModifier, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ConfirmedServiceRequest, $.BER)(value.confirmedServiceRequest, $.BER),
            /* IF_ABSENT  */ ((value.cs_extension === undefined) ? undefined : $._encode_explicit(_TagClass.context, 79, () => _encode_Request_Detail, $.BER)(value.cs_extension, $.BER)),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetEventActionAttributes_Response(value, elGetter);
}


/* eslint-enable */

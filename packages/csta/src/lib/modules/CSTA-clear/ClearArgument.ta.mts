/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ClearArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearArgument ::= SEQUENCE
 * {    overConnection            ConnectionID,
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ClearArgument {
    constructor (
        /**
         * @summary `overConnection`.
         * @public
         * @readonly
         */
        readonly overConnection: ConnectionID,
        /**
         * @summary `resource`.
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ClearArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ClearArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClearArgument`.
     * @returns {ClearArgument}
     */
    public static _from_object (_o: { [_K in keyof (ClearArgument)]: (ClearArgument)[_K] }): ClearArgument {
        return new ClearArgument(_o.overConnection, _o.resource, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ClearArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClearArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("overConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ClearArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClearArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClearArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClearArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClearArgument: $.ASN1Decoder<ClearArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearArgument (el: _Element): ClearArgument {
    if (!_cached_decoder_for_ClearArgument) { _cached_decoder_for_ClearArgument = function (el: _Element): ClearArgument {
    let overConnection!: ConnectionID;
    let resource: OPTIONAL<ResourceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "overConnection": (_el: _Element): void => { overConnection = _decode_ConnectionID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClearArgument,
        _extension_additions_list_spec_for_ClearArgument,
        _root_component_type_list_2_spec_for_ClearArgument,
        undefined,
    );
    return new ClearArgument(
        overConnection,
        resource,
        extensions
    );
}; }
    return _cached_decoder_for_ClearArgument(el);
}

let _cached_encoder_for_ClearArgument: $.ASN1Encoder<ClearArgument> | null = null;

/**
 * @summary Encodes a(n) ClearArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ClearArgument (value: ClearArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearArgument) { _cached_encoder_for_ClearArgument = function (value: ClearArgument, elGetter: $.ASN1Encoder<ClearArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.overConnection, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ClearArgument(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { EscapeRegister, _decode_EscapeRegister, _encode_EscapeRegister } from "../CSTA-capability-exchange/EscapeRegister.ta.mjs";

import { EscapeRegisterCancel, _decode_EscapeRegisterCancel, _encode_EscapeRegisterCancel } from "../CSTA-capability-exchange/EscapeRegisterCancel.ta.mjs";

import { EscapeRegisterAbort, _decode_EscapeRegisterAbort, _encode_EscapeRegisterAbort } from "../CSTA-capability-exchange/EscapeRegisterAbort.ta.mjs";

import { Escape, _decode_Escape, _encode_Escape } from "../CSTA-capability-exchange/Escape.ta.mjs";

import { PrivateDataVersionSelection, _decode_PrivateDataVersionSelection, _encode_PrivateDataVersionSelection } from "../CSTA-capability-exchange/PrivateDataVersionSelection.ta.mjs";



/**
 * @summary VendorSpecificServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VendorSpecificServList ::= SEQUENCE
 * {     escapeRegister             [ 0] IMPLICIT     EscapeRegister             OPTIONAL,
 *     escapeRegisterCancel         [ 1] IMPLICIT     EscapeRegisterCancel         OPTIONAL,
 *     escapeRegisterAbort         [ 2] IMPLICIT     EscapeRegisterAbort         OPTIONAL,
 *     escape                 [ 3] IMPLICIT     Escape                 OPTIONAL,
 *     privateDataVersionSelection     [ 4] IMPLICIT     PrivateDataVersionSelection     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class VendorSpecificServList {
    constructor (
        /**
         * @summary `escapeRegister`.
         * @public
         * @readonly
         */
        readonly escapeRegister: OPTIONAL<EscapeRegister>,
        /**
         * @summary `escapeRegisterCancel`.
         * @public
         * @readonly
         */
        readonly escapeRegisterCancel: OPTIONAL<EscapeRegisterCancel>,
        /**
         * @summary `escapeRegisterAbort`.
         * @public
         * @readonly
         */
        readonly escapeRegisterAbort: OPTIONAL<EscapeRegisterAbort>,
        /**
         * @summary `escape`.
         * @public
         * @readonly
         */
        readonly escape: OPTIONAL<Escape>,
        /**
         * @summary `privateDataVersionSelection`.
         * @public
         * @readonly
         */
        readonly privateDataVersionSelection: OPTIONAL<PrivateDataVersionSelection>
    ) {}

    /**
     * @summary Restructures an object into a VendorSpecificServList
     * @description
     * 
     * This takes an `object` and converts it to a `VendorSpecificServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VendorSpecificServList`.
     * @returns {VendorSpecificServList}
     */
    public static _from_object (_o: { [_K in keyof (VendorSpecificServList)]: (VendorSpecificServList)[_K] }): VendorSpecificServList {
        return new VendorSpecificServList(_o.escapeRegister, _o.escapeRegisterCancel, _o.escapeRegisterAbort, _o.escape, _o.privateDataVersionSelection);
    }


}

/**
 * @summary The Leading Root Component Types of VendorSpecificServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VendorSpecificServList: $.ComponentSpec[] = [
    new $.ComponentSpec("escapeRegister", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("escapeRegisterCancel", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("escapeRegisterAbort", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("escape", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("privateDataVersionSelection", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of VendorSpecificServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VendorSpecificServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VendorSpecificServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VendorSpecificServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VendorSpecificServList: $.ASN1Decoder<VendorSpecificServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VendorSpecificServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VendorSpecificServList (el: _Element): VendorSpecificServList {
    if (!_cached_decoder_for_VendorSpecificServList) { _cached_decoder_for_VendorSpecificServList = function (el: _Element): VendorSpecificServList {
    let escapeRegister: OPTIONAL<EscapeRegister>;
    let escapeRegisterCancel: OPTIONAL<EscapeRegisterCancel>;
    let escapeRegisterAbort: OPTIONAL<EscapeRegisterAbort>;
    let escape: OPTIONAL<Escape>;
    let privateDataVersionSelection: OPTIONAL<PrivateDataVersionSelection>;
    const callbacks: $.DecodingMap = {
        "escapeRegister": (_el: _Element): void => { escapeRegister = $._decode_implicit<EscapeRegister>(() => _decode_EscapeRegister)(_el); },
        "escapeRegisterCancel": (_el: _Element): void => { escapeRegisterCancel = $._decode_implicit<EscapeRegisterCancel>(() => _decode_EscapeRegisterCancel)(_el); },
        "escapeRegisterAbort": (_el: _Element): void => { escapeRegisterAbort = $._decode_implicit<EscapeRegisterAbort>(() => _decode_EscapeRegisterAbort)(_el); },
        "escape": (_el: _Element): void => { escape = $._decode_implicit<Escape>(() => _decode_Escape)(_el); },
        "privateDataVersionSelection": (_el: _Element): void => { privateDataVersionSelection = $._decode_implicit<PrivateDataVersionSelection>(() => _decode_PrivateDataVersionSelection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VendorSpecificServList,
        _extension_additions_list_spec_for_VendorSpecificServList,
        _root_component_type_list_2_spec_for_VendorSpecificServList,
        undefined,
    );
    return new VendorSpecificServList(
        escapeRegister,
        escapeRegisterCancel,
        escapeRegisterAbort,
        escape,
        privateDataVersionSelection
    );
}; }
    return _cached_decoder_for_VendorSpecificServList(el);
}

let _cached_encoder_for_VendorSpecificServList: $.ASN1Encoder<VendorSpecificServList> | null = null;

/**
 * @summary Encodes a(n) VendorSpecificServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VendorSpecificServList, encoded as an ASN.1 Element.
 */
export
function _encode_VendorSpecificServList (value: VendorSpecificServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VendorSpecificServList) { _cached_encoder_for_VendorSpecificServList = function (value: VendorSpecificServList, elGetter: $.ASN1Encoder<VendorSpecificServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.escapeRegister === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_EscapeRegister, $.BER)(value.escapeRegister, $.BER)),
            /* IF_ABSENT  */ ((value.escapeRegisterCancel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EscapeRegisterCancel, $.BER)(value.escapeRegisterCancel, $.BER)),
            /* IF_ABSENT  */ ((value.escapeRegisterAbort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EscapeRegisterAbort, $.BER)(value.escapeRegisterAbort, $.BER)),
            /* IF_ABSENT  */ ((value.escape === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Escape, $.BER)(value.escape, $.BER)),
            /* IF_ABSENT  */ ((value.privateDataVersionSelection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PrivateDataVersionSelection, $.BER)(value.privateDataVersionSelection, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VendorSpecificServList(value, elGetter);
}


/* eslint-enable */

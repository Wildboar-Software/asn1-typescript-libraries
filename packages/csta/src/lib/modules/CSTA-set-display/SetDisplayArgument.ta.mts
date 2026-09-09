/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { DisplayID, _decode_DisplayID, _encode_DisplayID } from "../CSTA-physical-device-feature/DisplayID.ta.mjs";

import {
    CharacterSet,
    _enum_for_CharacterSet,
    _decode_CharacterSet,
    _encode_CharacterSet
} from "../CSTA-physical-device-feature/CharacterSet.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetDisplayArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetDisplayArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     display             DisplayID                OPTIONAL,
 *     physicalBaseRowNumber        [0] IMPLICIT INTEGER             OPTIONAL,
 *     physicalBaseColumnNumber    [1] IMPLICIT INTEGER             OPTIONAL,
 *     contentsOfDisplay        IA5String (SIZE(0..240)),
 *     offset                [2] IMPLICIT INTEGER            OPTIONAL,
 *     characterSet            [3] IMPLICIT CharacterSet        OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetDisplayArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `display`.
         * @public
         * @readonly
         */
        readonly display: OPTIONAL<DisplayID>,
        /**
         * @summary `physicalBaseRowNumber`.
         * @public
         * @readonly
         */
        readonly physicalBaseRowNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `physicalBaseColumnNumber`.
         * @public
         * @readonly
         */
        readonly physicalBaseColumnNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `contentsOfDisplay`.
         * @public
         * @readonly
         */
        readonly contentsOfDisplay: IA5String,
        /**
         * @summary `offset`.
         * @public
         * @readonly
         */
        readonly offset: OPTIONAL<INTEGER>,
        /**
         * @summary `characterSet`.
         * @public
         * @readonly
         */
        readonly characterSet: OPTIONAL<CharacterSet>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetDisplayArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetDisplayArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetDisplayArgument`.
     * @returns {SetDisplayArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetDisplayArgument)]: (SetDisplayArgument)[_K] }): SetDisplayArgument {
        return new SetDisplayArgument(_o.device, _o.display, _o.physicalBaseRowNumber, _o.physicalBaseColumnNumber, _o.contentsOfDisplay, _o.offset, _o.characterSet, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `characterSet`
         * @public
         * @static
         */

    public static _enum_for_characterSet = _enum_for_CharacterSet;
}

/**
 * @summary The Leading Root Component Types of SetDisplayArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetDisplayArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("display", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("physicalBaseRowNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("physicalBaseColumnNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("contentsOfDisplay", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("offset", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("characterSet", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetDisplayArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetDisplayArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetDisplayArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetDisplayArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetDisplayArgument: $.ASN1Decoder<SetDisplayArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetDisplayArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetDisplayArgument (el: _Element): SetDisplayArgument {
    if (!_cached_decoder_for_SetDisplayArgument) { _cached_decoder_for_SetDisplayArgument = function (el: _Element): SetDisplayArgument {
    let device!: DeviceID;
    let display: OPTIONAL<DisplayID>;
    let physicalBaseRowNumber: OPTIONAL<INTEGER>;
    let physicalBaseColumnNumber: OPTIONAL<INTEGER>;
    let contentsOfDisplay!: IA5String;
    let offset: OPTIONAL<INTEGER>;
    let characterSet: OPTIONAL<CharacterSet>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "display": (_el: _Element): void => { display = _decode_DisplayID(_el); },
        "physicalBaseRowNumber": (_el: _Element): void => { physicalBaseRowNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physicalBaseColumnNumber": (_el: _Element): void => { physicalBaseColumnNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "contentsOfDisplay": (_el: _Element): void => { contentsOfDisplay = $._decodeIA5String(_el); },
        "offset": (_el: _Element): void => { offset = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "characterSet": (_el: _Element): void => { characterSet = $._decode_implicit<CharacterSet>(() => _decode_CharacterSet)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetDisplayArgument,
        _extension_additions_list_spec_for_SetDisplayArgument,
        _root_component_type_list_2_spec_for_SetDisplayArgument,
        undefined,
    );
    return new SetDisplayArgument(
        device,
        display,
        physicalBaseRowNumber,
        physicalBaseColumnNumber,
        contentsOfDisplay,
        offset,
        characterSet,
        extensions
    );
}; }
    return _cached_decoder_for_SetDisplayArgument(el);
}

let _cached_encoder_for_SetDisplayArgument: $.ASN1Encoder<SetDisplayArgument> | null = null;

/**
 * @summary Encodes a(n) SetDisplayArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetDisplayArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetDisplayArgument (value: SetDisplayArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetDisplayArgument) { _cached_encoder_for_SetDisplayArgument = function (value: SetDisplayArgument, elGetter: $.ASN1Encoder<SetDisplayArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.display === undefined) ? undefined : _encode_DisplayID(value.display, $.BER)),
            /* IF_ABSENT  */ ((value.physicalBaseRowNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.physicalBaseRowNumber, $.BER)),
            /* IF_ABSENT  */ ((value.physicalBaseColumnNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.physicalBaseColumnNumber, $.BER)),
            /* REQUIRED   */ $._encodeIA5String(value.contentsOfDisplay, $.BER),
            /* IF_ABSENT  */ ((value.offset === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.offset, $.BER)),
            /* IF_ABSENT  */ ((value.characterSet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CharacterSet, $.BER)(value.characterSet, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetDisplayArgument(value, elGetter);
}


/* eslint-enable */

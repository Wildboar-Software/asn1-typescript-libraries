/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { Procedure, _decode_Procedure, _encode_Procedure, _enum_for_Procedure } from "../Call-Diversion-Operations-asn1-97/Procedure.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements-asn1-97/Address.ta.mjs";
import { IntResult_extension, _decode_IntResult_extension, _encode_IntResult_extension } from "../Call-Diversion-Operations-asn1-97/IntResult-extension.ta.mjs";

/**
 * @summary IntResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntResult ::= SEQUENCE {
 *     servedUserNr PartyNumber,
 *     basicService BasicService,
 *     procedure Procedure,
 *     divertedToAddress Address,
 *     remoteEnabled BOOLEAN DEFAULT FALSE,
 *     extension CHOICE {
 *         single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *         multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IntResult {
    /**
     * @summary `servedUserNr`.
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `procedure`.
     * @public
     * @readonly
     */
    readonly procedure: Procedure;
    /**
     * @summary `divertedToAddress`.
     * @public
     * @readonly
     */
    readonly divertedToAddress: Address;
    /**
     * @summary `remoteEnabled`.
     * @public
     * @readonly
     */
    readonly remoteEnabled: OPTIONAL<BOOLEAN>;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<IntResult_extension>;

    constructor (
        servedUserNr: PartyNumber,
        basicService: BasicService,
        procedure: Procedure,
        divertedToAddress: Address,
        remoteEnabled: OPTIONAL<BOOLEAN>,
        extension: OPTIONAL<IntResult_extension>
    ) {
        this.servedUserNr = servedUserNr;
        this.basicService = basicService;
        this.procedure = procedure;
        this.divertedToAddress = divertedToAddress;
        this.remoteEnabled = remoteEnabled;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a IntResult
     * @description
     * 
     * This takes an `object` and converts it to a `IntResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntResult`.
     * @returns {IntResult}
     */
    public static _from_object (_o: { [_K in keyof (IntResult)]: (IntResult)[_K] }): IntResult {
        return new IntResult(_o.servedUserNr, _o.basicService, _o.procedure, _o.divertedToAddress, _o.remoteEnabled, _o.extension);
    }

    /**
     * @summary Getter that returns the default value for `remoteEnabled`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_remoteEnabled () { return false; }        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;        /**
         * @summary The enum used as the type of the component `procedure`
         * @public
         * @static
         */

    public static _enum_for_procedure = _enum_for_Procedure;
}

/**
 * @summary The Leading Root Component Types of IntResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IntResult: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("procedure", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("divertedToAddress", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("remoteEnabled", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of IntResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IntResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IntResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IntResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IntResult: $.ASN1Decoder<IntResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntResult (el: _Element): IntResult {
    if (!_cached_decoder_for_IntResult) { _cached_decoder_for_IntResult = function (el: _Element): IntResult {
    let servedUserNr!: PartyNumber;
    let basicService!: BasicService;
    let procedure!: Procedure;
    let divertedToAddress!: Address;
    let remoteEnabled: OPTIONAL<BOOLEAN> = IntResult._default_value_for_remoteEnabled;
    let extension: OPTIONAL<IntResult_extension>;
    const callbacks: $.DecodingMap = {
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "procedure": (_el: _Element): void => { procedure = _decode_Procedure(_el); },
        "divertedToAddress": (_el: _Element): void => { divertedToAddress = _decode_Address(_el); },
        "remoteEnabled": (_el: _Element): void => { remoteEnabled = $._decodeBoolean(_el); },
        "extension": (_el: _Element): void => { extension = _decode_IntResult_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IntResult,
        _extension_additions_list_spec_for_IntResult,
        _root_component_type_list_2_spec_for_IntResult,
        undefined,
    );
    return new IntResult(
        servedUserNr,
        basicService,
        procedure,
        divertedToAddress,
        remoteEnabled,
        extension
    );
}; }
    return _cached_decoder_for_IntResult(el);
}

let _cached_encoder_for_IntResult: $.ASN1Encoder<IntResult> | null = null;

/**
 * @summary Encodes a(n) IntResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntResult, encoded as an ASN.1 Element.
 */
export
function _encode_IntResult (value: IntResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntResult) { _cached_encoder_for_IntResult = function (value: IntResult, _elGetter: $.ASN1Encoder<IntResult>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    _components.push(/* REQUIRED   */ _encode_Procedure(value.procedure, $.BER));
    _components.push(/* REQUIRED   */ _encode_Address(value.divertedToAddress, $.BER));
    if (value.remoteEnabled !== undefined && !$.deepEq(value.remoteEnabled, IntResult._default_value_for_remoteEnabled)) {
        _components.push(/* IF_DEFAULT */ $._encodeBoolean(value.remoteEnabled, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_IntResult_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IntResult(value, elGetter);
}

/* eslint-enable */
